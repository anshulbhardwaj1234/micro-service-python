from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional

class userAccesstable(BaseModel):
    UserId: int
    ChatbotGemini: bool
    ChatbotOpenAI: bool
    Facemask: bool
    FirClassification: bool
    ImageQuerying: bool

class userAccesstableCreate(userAccesstable):
    pass