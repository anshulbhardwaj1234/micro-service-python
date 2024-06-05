import pyodbc
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

driver = "{ODBC Driver 18 for SQL Server}"
server = "tcp:ginieaiserver.database.windows.net,1433"
database = "GinieAIStoreDB"
username = "SQL"
password = "Anshul2411"


# Driver={ODBC Driver 18 for SQL Server};Server=tcp:ginieaiserver.database.windows.net,1433;Database=GinieAIStoreDB;Uid=SQL;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;

conn_str = f"DRIVER={driver};SERVER={server};DATABASE={database};Uid=SQL;Pwd={password};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"

conn =  pyodbc.connect(conn_str)

engine = create_engine("mssql+pyodbc://", creator=lambda: conn)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()