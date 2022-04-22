# 1. Starting project
- Install => Python3 and Node.js

# 2. Setup backend
- make new directory, and run the command `pip3 install pipenv`
- if this doesn't work then run command `brew install pipenv` (for mac)
    - pipenv is a packaging tool for python, that simplifies dependency management for common use cases.
- install django using `pipenv install django`

# 3. create a new project called backend
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

# 5. migration
-  `python manage.py migrate`=> it is live a version control system for database schema. We are using SQlite here 

# 6. Starting the server
- run web server, with command => `python3 manage.py runserver` 

# 7. Registering todo App:
- add app's name to `backend/settings.py` in INSTALLED_APPS

# 8. Work on todo/models.py
- Create a table
- Migrate it `python3 manage.py makemigrations todo`
- then apply changes to the database `python3 manage.py migrate todo`

# 9. To see the changes in CRUD
- tools/admin.py = add admin.modelAdmin class 

# 10. Create a superuser
- `python manage.py createsuperuser` => access the admin interface
- run server `python manage.py runserver`
- Navigat to `http://localhost:8000/admin`