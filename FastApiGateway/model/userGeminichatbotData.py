#import packages
from sqlalchemy import Boolean, Column, Date, Float, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import declarative_base,relationship
from sqlalchemy.sql import func

userGeminichatbotData_base = declarative_base()

class userGeminichatbotData(userGeminichatbotData_base):
    __tablename__ = 'userGeminichatbotData'

    UserId=Column(Integer)
    Question1=Column(String)
    Answer1=Column(String)
    Question2=Column(String)
    Answer2=Column(String)
    Question3=Column(String)
    Answer3=Column(String)
    Question4=Column(String)
    Answer4=Column(String)
    Question5=Column(String)
    Answer5=Column(String)