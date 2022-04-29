# <p align="center"> Setting up Backend </p>

## 1. Starting project
- Install => Python3 and Node.js

## 2. Setup backend
- make new directory, and run the command 
```console  
    pip3 install pipenv
```
- if this doesn't work then run command (for mac)
```console 
    brew install pipenv
```
- pipenv is a packaging tool for python, that simplifies dependency management for common use cases.
- install django using 
```console 
    pipenv install django
```

## 3. Create a new project called backend
- run the following command
```console 
    django-admin startproject backend
```
- This command creates a default project structure for the name that you suggest in this case backend 
- This directory will hold the following:
    - `manage.py` => used to execute project specific tasks, just like django-admin execute system wide Django tasks.
    - `asgi.py` => contains asgi configuration properites for Django project, it is an approach to deploy Djago Applications asynchronously on production (i.e. to the public) 
    - `__init__.py` => generic file used in all python applications. Allows python packages to be imported from directories where it's present.
    - `settings.py` => Configuration settings for django project
    - `urls.py` => Contains url patterns for the django project  
    - `wsgi.py` => contains wsgi configuration for django project. It is a recommended approach to deploy django to public

## 4. Create todo application
- Run the command to create a folder todo with all the basic .py files needed
```console
    python manage.py startapp todo
```

## 5. **Migration**
- This command creates a live a version control system for database schema. We are using SQlite here 
```console
    python manage.py migrate
```
## 6. Starting the server
- run web server, with command => 
```console
    python3 manage.py runserver`
```

## 7. Registering todo App:
- add app's name to `backend/settings.py` in INSTALLED_APPS

## 8. Work on **todo/models.py**
- Create a table
- Migrate it, by running the following command 
```console
    python3 manage.py makemigrations todo
```
- then apply changes to the database, by running the following command
```console
    python3 manage.py migrate todo`
```

## 9. To see the changes in **CRUD**
- In `tools/admin.py`add admin.modelAdmin class 

## 10. Create a **superuser**
- To access the admin interface, run the command 
```console
    python manage.py createsuperuser
```
- run server using  
```console
    python manage.py runserver
```
- Navigate to `http://localhost:8000/admin`

# <p align="center"> Setting up APIs </p>

## 11. Install **django rest framework** and django cors headers
- Run the following command to install REST Framework
```console 
    pipenv install djangorestframework django-cors-headers
```
- Add rest_framework and corsheaders to list of installed applications in backend/settings.py
- Add CORS_ORIGIN_WHITELIST at the end of `backend/settings.py`

# _NOTE: **Django Rest framework** (used for making APIs)_
- it is a toolkit for building Web APIs
- we add rest_framework to `INSTALLED_APPS` in **settings.py**

# _NOTE: **CORS**_
- django-cors-headers is python library that prevent errors that you would get due to CORS rules
- CORS are used to allow interaction with resources hosted on different domains, like Ajax requests

## 12. Creating Serializers todo/serializers.py
- create file `todo/serializer.py`
- This code specifies the model to work with and the fields to be converted to JSON

# _NOTE: **Serializers**_
- used to convert model instance to JSON so that frontend can work with the received data. Basically used to define API representation 


## 13. Creating views **todo/views.py**
- `viewsets` base class provides implementations for CRUD operations by default.
- The code in here specifies serializer_class

# _NOTE: **Viewsets**_
- ViewSets handle URL construction automatically (with a `router class`)
- Basically instead of calling `.get()` and `post()` we use `.list()` and `.create()`
- Other frameworks find conceptually similar implementations named something like Resources or Controllers

## 14. Add content to **backend/urls.py**
- Code specifies URL path for the API

# The Flow for creating API
- create models `models.py` -> using model create serializer `serializers.py` -> Create View `views.py`


# <p align="center">Setting up Frontend</p>

## 15. Create React app
- We use `npx` to run the package and create the project.Run command 
```console
    npx create-react-app frontend
```
- Install Bootstrap and Reactstrap for User interface tools 

```console
    npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps
```
- Now in `frontend/src/index.js` we need to add bootstrap.min.css.


# _Note: React Explained_

- JSX used to code react. Example shows how JSC is implemented in react
    ```jsx  
        const name = sunny
        const greet = <h1>Hello, {name}<h1>
    ```

- **Virtual DOM explained** => When state of an object is changed in React application, VDOM get's updated. It then compares it's pervious state and then update only those objects in the real DOM instead of updating all of the objects. Making things move fast.

- **Components in React** => React seperates UI into components. Helps with maintaing and managing code. Below are 2 types of components: Functional and Class 
    
    ### Example 
    _Functional Component_ 
    ```jsx
        import React from "react";

        function FunctionalComp(){
            return <p>This is a Functional Component<p>
        }
        export default FunctionalComp;
    ```
    _Class Component_ 
    ```jsx
        import React from "react";
        export class ClassComp extends React.Component{
            render(){
                return <p> This is a Class Component<p>;
            }
        }
        export default ClassComp;
    ```
    
    - **Explanation**
        1. _Class Component_ comes with render method to render stuff onto screen.
        2. Export default is used to export only 1 object (function, variable, class) from the file
        3.  


## 16 working on UI in `app.js`
- adding code to `frontend/src/App.js`
