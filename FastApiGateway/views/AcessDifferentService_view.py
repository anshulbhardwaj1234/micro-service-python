import os
from dotenv import load_dotenv
import requests
from sqlalchemy import text

load_dotenv()

def FirAnalysis_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(user_data)
    return requests.post(user_data[1],data=data)

def AmazonAnalysis_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(data)
    try:
         # Raise an exception for non-200 status codes
        return user_data[1]
    except Exception as e:
        print(e)


def AskPDF_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(user_data)
    return requests.post(user_data[1],data=data)

def GeminiBotAskText_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(user_data)
    return requests.post(user_data[1],data=data)

def GeminiBotAskImgText_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(user_data)
    return requests.post(user_data[1],data=data) 

def GeminiBotAskChatbot_view(data,db):
    query = f"SELECT TOP (1) * FROM [dbo].[GinieEndpoints]"
    print("ok")
    result = db.execute(text(query))
    user_data = result.fetchone() 
    print(user_data)
    return requests.post(user_data[1],data=data)