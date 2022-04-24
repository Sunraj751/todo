# ******* Setting up Backend **********

# 1. Starting project
- Install => Python3 and Node.js

# 2. Setup backend
- make new directory, and run the command `pip3 install pipenv`
- if this doesn't work then run command `brew install pipenv` (for mac)
    - pipenv is a packaging tool for python, that simplifies dependency management for common use cases.
- install django using `pipenv install django`

# 3. Create a new project called backend
- run the following command => `django-admin startproject backend`
    - This command creates a default project structure for the name that you suggest in this case backend 
- This directory will hold the following:
    - `manage.py` => used to execute project specific tasks, just like django-admin execute system wide Django tasks.
    - `asgi.py` => contains asgi configuration properites for Django project, it is an approach to deploy Djago Applications asynchronously on production (i.e. to the public) 
    - `__init__.py` => generic file used in all python applications. Allows python packages to be imported from directories where it's present.
    - `settings.py` => Configuration settings for django project
    - `urls.py` => Contains url patterns for the django project  
    - `wsgi.py` => contains wsgi configuration for django project. It is a recommended approach to deploy django to public

# 4. Create todo application
- `python manage.py startapp todo` => creates a folder todod with all the basic .py files needed

# 5. **Migration**
-  `python manage.py migrate`=> it is live a version control system for database schema. We are using SQlite here 

# 6. Starting the server
- run web server, with command => `python3 manage.py runserver` 

# 7. Registering todo App:
- add app's name to `backend/settings.py` in INSTALLED_APPS

# 8. Work on **todo/models.py**
- Create a table
- Migrate it `python3 manage.py makemigrations todo`
- then apply changes to the database `python3 manage.py migrate todo`

# 9. To see the changes in **CRUD**
- `tools/admin.py` = add admin.modelAdmin class 

# 10. Create a **superuser**
- `python manage.py createsuperuser` => access the admin interface
- run server `python manage.py runserver`
- Navigate to `http://localhost:8000/admin`

# ******* Setting up APIs **********

# _NOTE: **Django Rest framework** (used for making APIs)_
- it is a toolkit for building Web APIs
- we add rest_framework to `INSTALLED_APPS` in **settings.py**

# _NOTE: **CORS**_
- django-cors-headers is python library that prevent errors that you would get due to CORS rules
- CORS are used to allow interaction with resources hosted on different domains, like Ajax requests


# 11. Install **django rest framework** and django cors headers
- `pipenv install djangorestframework django-cors-headers`
- Add rest_framework and corsheaders to list of installed applications in backend/settings.py
- Add CORS_ORIGIN_WHITELIST at the end of **backend/settings.py**



# _NOTE: **Serializers**_
- used to convert model instance to JSON so that frontend can work with the received data. Basically used to define API representation 


# 12. Creating Serializers todo/serializers.py
- create file `todo/serializer.py`
- This code specifies the model to work with and the fields to be converted to JSON


# _NOTE: **Viewsets**_
- ViewSets handle URL construction automatically (with a `router class`)
- Basically instead of calling `.get()` and `post()` we use `.list()` and `.create()`
- Other frameworks find conceptually similar implementations named something like Resources or Controllers


# 13. Creating views **todo/views.py**
- `viewsets` base class provides implementations for CRUD operations by default.
- The code in here specifies serializer_class


# 14. Add content to **backend/urls.py**
- Code specifies URL path for the API

# The Flow for creating API
- create models `models.py` -> using model create serializer `serializers.py` -> Create View `views.py`

