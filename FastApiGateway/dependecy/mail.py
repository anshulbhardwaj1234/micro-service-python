import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Replace with your details
sender_email = "anshulbhardwaj2411@gmail.com"
password = "scxr tltn zybw lzsl"  # Replace with a strong password or app password
message = MIMEMultipart("alternative")
message["Subject"] = "multipart test"
message["From"] = sender_email




def SendMail(Data:str,receiver_email:str):
    message["To"] = receiver_email
    html = f"""\
    <html>
    <body>
        <h1>Hi!! From Ginie</h1>
        <p><strong>I am Freed from my lamp to pass this message to you</strong></p>
        <hr>
        <p>{Data}</p>
        <hr>
        <p><strong>Going Back to Lamp!!☹</strong></p>
        <br>
        <h3>Please visit my web To Free me Again and Intract with my Magics</h3>
    </body>
    </html>
    """

    part = MIMEText(html, "html")
    message.attach(part)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:  # Replace "smtp.example.com" with your email provider's SMTP server
    
        server.login(sender_email, password)

        # Create a message object
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
    
    return "Email sent successfully!"



