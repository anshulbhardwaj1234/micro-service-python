
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from dependecy.Auth import Manage_Subscription_Status, get_current_user, verify_Subscription
from model.userSite import UserSite
from views import AcessDifferentService_view

from database.db import get_db



AccessServices = APIRouter()

@AccessServices.post("/FirAnalysis/")
def FirAnalysis(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.FirAnalysis_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating User: {str(e)}")
    

@AccessServices.post("/AmazonAnalysis/")
def AmazonAnalysis(current_user: Annotated[UserSite, Depends(get_current_user)],data:str,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.AmazonAnalysis_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
@AccessServices.post("/AskPDF/")
def AskPDF(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.AskPDF_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
@AccessServices.post("/GeminiBotAskText/")
def GeminiBotAskText(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.GeminiBotAskText_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
@AccessServices.post("/GeminiBotAskImgText/")
def GeminiBotAskImgText(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.GeminiBotAskImgText_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    
@AccessServices.post("/GeminiBotAskChatbot/")
def GeminiBotAskChatbot(current_user: Annotated[UserSite, Depends(get_current_user)],data,db: Session = Depends(get_db)):
    try:
        if(verify_Subscription(current_user)):
            output = AcessDifferentService_view.GeminiBotAskChatbot_view(data,db)
            Manage_Subscription_Status(current_user)
            return output
        else:
            return "Subscription Expired"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error validating User: {str(e)}")
    