#import packages
from sqlalchemy import Boolean, Column, Date, Float, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import declarative_base,relationship
from sqlalchemy.sql import func

userAccesstable_base = declarative_base()

class userAccesstable(userAccesstable_base):
    __tablename__ = 'userAccesstable'

    UserId= Column(Integer)
    ChatbotGemini= Column(Boolean)
    GinieChatbot= Column(Boolean)
    Facemask= Column(Boolean)
    FirClassification= Column(Boolean)
    ImageQuerying= Column(Boolean)
    AsktoPDF = Column(Boolean)
    amazonReview = Column(Boolean)