from django.db import models

# Create your models here.
# this folder contains all the information about the data.
# each model maps to a single database table 

# this code creates 3 fields title, description, completed
class Todo(models.Model):
    title = models.CharField(max_length=120) # title is the field of model. Each field has a class attribute, each attribute maps to a database column
    description = models.TextField()
    completed = models.BooleanField(default=False)
    
    def _str_(self):
        return self.title