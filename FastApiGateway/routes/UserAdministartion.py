from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Schemas.SiteUser import LoginDetails, SiteUser, SiteUserCreate
from dependecy.Auth import get_current_user
from model.userSite import UserSite
from views import UserAdministartion_view

from database.db import get_db


UserAdminstration_router = APIRouter()

@UserAdminstration_router.post("/SignUp/")
def Signup(userDetails:SiteUser,db: Session = Depends(get_db)):
    try:
        return UserAdministartion_view.create_User(db, userDetails)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating User: {str(e)}")
    

@UserAdminstration_router.post("/SignIn/")
def SignIn(LoginDetails:LoginDetails,db: Session = Depends(get_db)):
    try:
        return UserAdministartion_view.validate_User(db, LoginDetails)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")


@UserAdminstration_router.post("/VerifyOTP/")
def SignIn(current_user: Annotated[UserSite, Depends(get_current_user)],OTP,db: Session = Depends(get_db)):
    try:
        print("got it")
        return UserAdministartion_view.varifyOTP(db,current_user, OTP)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
@UserAdminstration_router.post("/BuySubscription/")
def BuySubscription(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        return UserAdministartion_view.Update_Subscription(current_user,data )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")