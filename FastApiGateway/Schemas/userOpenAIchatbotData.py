from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional

class userOpenAIchatbotData(BaseModel):
    UserId: int
    Question1: Optional[str]
    Answer1: Optional[str]
    Question2: Optional[str]
    Answer2: Optional[str]
    Question3: Optional[str]
    Answer3: Optional[str]
    Question4: Optional[str]
    Answer4: Optional[str]
    Question5: Optional[str]
    Answer5: Optional[str]

class userOpenAIchatbotDataCreate(userOpenAIchatbotData):
    pass