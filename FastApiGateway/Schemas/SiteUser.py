from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class register(BaseModel):
    Username: str
    Password: str
    Email: str


class SiteUser(register):
    
    Username: str
    Password: str
    Email: str
    IsSubscriptionActive: bool
    FreeTrials: int
    SubscriptionPurchasedDate: date
    SubscriptionPlan: str
    pass




class SiteUserCreate(SiteUser):
    UserId: int
    pass

class LoginDetails(BaseModel):
    Username: str
    Password: str