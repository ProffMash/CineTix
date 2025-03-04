from django.db import models

# Booking Model
class Booking(models.Model):
    timeChoices = [
        ('12:00:00', '12:00 PM'),
        ('14:00:00', '3:00 PM'),
        ('16:00:00', '6:00 PM'),
        ('18:00:00', '9:00 PM'),
    ]
    movie_name = models.CharField(max_length=100)
    number_of_tickets = models.IntegerField()
    date = models.DateField()
    time = models.CharField(max_length=8, choices=timeChoices)
    email = models.EmailField()

    def __str__(self):
        return f"Booking for {self.movie_name} on {self.date} at {self.time}"

# Contacts Model
class Contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
    