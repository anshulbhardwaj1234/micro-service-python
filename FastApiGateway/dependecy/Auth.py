import random
from typing import Annotated
from fastapi import Depends, HTTPException,status
from passlib.context import CryptContext
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from pytest import Session

from Schemas.SiteUser import SiteUser
from database.db import get_db
from model.userSite import UserSite



class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None

class UserInDB(SiteUser):
    password: str

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


pwd_context = CryptContext(schemes=[ "bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db: Session, username: str):
    user = db.query(UserSite).filter(UserSite.Username == username).first()
    if user:
        
        return user
    
def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        print(token)
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print(payload)
        username: str = payload.get("subName")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError as e:
        print(e)
        raise credentials_exception
    user = get_user(db=next(get_db()), username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


def generate_otp(length=5):
  """Generates a random OTP of the specified length (default 5 digits)."""
  digits = "0123456789"
  otp = "".join(random.choice(digits) for _ in range(length))
  return otp




def verify_Subscription(User:UserSite):
    if (User.FreeTrials > 0):
        return True
    elif(User.IsSubscriptionActive):
        return True
    else :
        return False

def Manage_Subscription_Status(User:UserSite):
    db=next(get_db())
    if User.FreeTrials > 0:
        updated_trials_count = User.FreeTrials - 1
        db.query(UserSite).filter(UserSite.UserId == User.UserId).update({"FreeTrials": updated_trials_count})
    
        # Commit the transaction
        db.commit()
        return
    else:
        subscription_plan = User.SubscriptionPlan
        extension_periods = {
            "0":0,
            "1": 1,
            "2": 5,
            "3": 12,
        }

        extensionDate = extension_periods.get(subscription_plan, 0)

        purchase_date = datetime.strptime(User.SubscriptionPurchasedDate, "%Y-%m-%d")
        
        # Calculate the extension period in days
        extension_days = timedelta(days=extensionDate)

        # Calculate the subscription expiry date
        expiry_date = purchase_date + extension_days

        # Get today's date
        today_date = datetime.now()
    
        if today_date > expiry_date:
            # Subscription has expired, update IsActive to "0" in the database
            db.query(UserSite).filter(UserSite.UserId == User.UserId).update({"IsSubscriptionActive": 0})
            db.commit()
            return
        else:
            return
        
def update_Subscription(User:UserSite,data):
    db=next(get_db())

    db.query(UserSite).filter(UserSite.UserId == User.UserId).update({"IsSubscriptionActive": 1})
    db.commit()
    db.query(UserSite).filter(UserSite.UserId == User.UserId).update({"SubscriptionPlan": f"{data}"})
    db.commit()
