import smtplib
from smtplib import SMTP

sender_email = "salesreadyservices@gmail.com"
rec_email = "ferris.eric@gmail.com"
password = input(str("Enter Password: "))
message = "Hey this msg was sent from python"

server = smtplib.SMTP('smtp.gmail.com', 587);
server.starttls()
server.login(sender_email, password)
print( "Logged In")
server.sendmail(sender_email, rec_email, message)
print( "Email sent to : ", rec_email)
