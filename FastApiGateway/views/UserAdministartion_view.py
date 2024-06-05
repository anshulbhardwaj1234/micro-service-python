from datetime import datetime
from sqlalchemy import text
from fastapi import HTTPException
from sqlalchemy.orm import Session
from dependecy.Auth import create_access_token, generate_otp, get_password_hash, update_Subscription, verify_password
from dependecy.mail import SendMail
from model.userSite import UserSite
from Schemas.SiteUser import LoginDetails, SiteUser, SiteUserCreate



def create_User(db: Session, userDetails: SiteUserCreate):
    try:
        print(userDetails)
        hashed_password = get_password_hash(userDetails.Password)        
        userDetails.Password = hashed_password
        userDetails.FreeTrials = 3
        userDetails.IsSubscriptionActive = 0
        userDetails.SubscriptionPlan = "0"
        
        db_user = UserSite(**userDetails.dict())
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except Exception as e:
        db.rollback()
        print(e)
        raise HTTPException(status_code=500, detail=f"Error creating User: {str(e)}")
    
 
def validate_User(db: Session, LoginDetails:LoginDetails):
    try:
        user = db.query(UserSite).filter(UserSite.Username == LoginDetails.Username).first()

        print("got it",SiteUserCreate(**user.__dict__))
        if verify_password(LoginDetails.Password,user.Password):
            OTP = generate_otp()
            print(OTP)
            hashed_OTP = get_password_hash(OTP)
            print(hashed_OTP)
            update_stmt = text(f"UPDATE TOP(1) [dbo].[SiteUser] SET OTP = '{hashed_OTP}';")
            db.execute(update_stmt)
            db.commit()
            try:
                SendMail(Data=f"OTP:{OTP}",receiver_email=user.Email)
            except:
                pass
            # db.query(UserSite).filter(UserSite.UserId == user.UserId).update({"OTP": hashed_OTP})
            return create_access_token(data={"subName": user.Username,"subId": user.UserId})
        else:
            return False
    except Exception as e:
        print(e)
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
def varifyOTP(db: Session,user,otp):
  try:
    # Use bind parameters to avoid SQL injection vulnerabilities
    print("ok")
    query = f"SELECT * FROM [dbo].[SiteUser] WHERE Username = :username"
    params = {"username": user.Username}
    print("ok")
    result = db.execute(text(query), params)
    user_data = result.fetchone()  # Assuming you only need one record
    print("ok")
    if user_data and verify_password(otp, user_data.OTP):
      return True
    else:
      return False

  except Exception as e:
    db.rollback()
    print(e)
    raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")


def Update_Subscription(user,data):
    try:
            return update_Subscription(user,data)
    except Exception as e:
       
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")