#import packages
from sqlalchemy import Boolean, Column, Date, Float, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import declarative_base,relationship
from sqlalchemy.sql import func

userSite_base = declarative_base()

class UserSite(userSite_base):
    __tablename__ = 'SiteUser'
    UserId = Column(Integer, primary_key=True)
    Username = Column(String)
    Password = Column(String(10000))
    Email = Column(String(10000))
    IsSubscriptionActive = Column(Boolean)
    FreeTrials = Column(Integer)
    SubscriptionPurchasedDate = Column(Date)
    SubscriptionPlan = Column(String(20))