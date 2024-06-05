import json
from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException
from database.db import get_db
import pyodbc
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware


from dependecy.Auth import get_current_user
from model.userSite import UserSite
from routes.AcessDifferentService_route import AccessServices
from routes.UserAdministartion import UserAdminstration_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to allow requests from specific origins in production
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Include OPTIONS method
    allow_headers=["*"],
)

app.include_router(UserAdminstration_router, prefix="/api", tags=["UserAdminstration_router"])
app.include_router(AccessServices, prefix="/api/AccessServices", tags=["AccessServices"])



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
