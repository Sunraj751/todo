# <p align="center"> Setting up Backend</p>

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
    **_Functional Component_ (aka Stateless Component)**
    ```jsx
        import React from "react";

        function FunctionalComp(){
            return <p>This is a Functional Component<p>
        }
        export default FunctionalComp;
    ```
    **_Class Component_ (aka Stateful component)**
    ```jsx
        import React from "react";
        export class ClassComp extends React.Component{
            render(){
                return <p> This is a Class Component<p>;
            }
        }
        export default ClassComp;
    ```
    Functional Component | Class Component
    ------------ | -------------
    Basic JS function | Needs to be extended from React.Component 
    Comes with **No render method** | Must have render method. Which reurns JSX i.e. syntactically similar to HTML
    Accepts Props as argument | 
    Stateless Component cause they simply accept the data and display them in some format, mainly used for rendering UI | Stateful components because they implement logic and state
    Can't use React lifecycle method (componentDidMount) | Can use React lifecycle method
    Hooks can be used to make them **stateful** | Requires different syntax to use Hooks
    Constructors are not used| Constructors used to store state

- Now these Components are imported into main component i.e. `App.js`

    **_Main Component_**
    ```jsx
        import React from "react";
        import FunctionalComp from "./Components/FunctionalComp";
        import ClassComp from "./Components/ClassComp";

        function App(){
            return (
                <div>
                    <h1>Hello</h1>
                    <FunctionalComp />
                    <ClassComp />
                </div>
            );
        }
        export default App;
    ```
- **Props in React** => Short for properties, allows user to pass arguments or data to components. **Props in components are read-only**. They help make things dynamic. They are used in Functional Component (as it is with no syntax change)
    
    ### Basic Example 
    **_class Classprops.js_**

    ```jsx
        import React, { Component } from "react";
        class Classprops extends Component {
            render(){
                return(
                    <div>
                        <h1>
                            hello {this.props.name} from {this.props.name}!
                        </h1>
                    </div>
                );
            }
        }
        export default Classprops;
    ```
    
    - Here we use properites called `name` and `place` whose values will be passed when importing component into parent component (i.e. `App.js`)

    **_App.js_**

    ```jsx
        import React from "react";
        import Classprops from "./Classprops";
        class App extends React.Component{
            render(){
                return(
                    <div>
                        <Classprops name = "tar-1" place = "AB">
                        <Classprops name = "tar-2" place = "BC">
                    </div>
                );
            }
        }
        export default App;
    ```
- **State in React** => Stat represents parts of application that can be changed. React re-renders the component on the browser whenever the state of an object is changed 

    **_state.js_**
    
    ```jsx
        import React, { Component } from 'react';
        class State extends Component {
            constructor(props){
                super(props)
                this.state = {
                    message: "ABC"
                }
            }
            render(){
                return(
                    <div className ='App'>
                        <h3>{this.state.message}</h3>
                    </div>
                )
            };
        }
        export default State
    ```


    **_App.js_** (Main Component)
    
    ```jsx
        import React from "react";
        import "./App.css";
        import State from "./Components/State";
        class App extends React.Component{
            styles = {
                fontStyle:"bold",
                color:"Black"
            };
            render(){
                <div className="App">
                    <h1 style={this.state}> Welcome</h1>
                    <State/>
                </div>
            };
        }
        export default App;
    ```
    - h3 tag in **_state.js_** displays the value of `message` a state object. We use SetState() for changing the things displayed on the screen.


    - # setState() Method
        - Used to update state using event handler, server responses or props changes.
        - Working => it enqueues all updates made to component state and instructs React to re-render the component and its children with the update state.
        - Example: subscribe button is clicked. On click the display message changes. Here we have to us setState() method.

    ```jsx
        import React, {Component} from 'react';
        class State extends Component {
            constructor(props){
                super(props)
                this.state ={
                    message: "Subscribe to Simplelearn",
                    sub : 'Subscribe'
                }
            }
            changeMessage = () => {
                this.setState({
                    message: "Thank you for Subcribing",
                    sub: "Subscribed"
                })
            }
            render(){
                return(
                    <div className='App'>
                        <h3>{this.state.message}</h3>
                        <button onClick={this.changeMessage}>{this.state.sub}</button>
                    </div>
                )
           }
        }
        export default State
    ```

    -  We basically create a state object. For that we use constructor, and create the first look.
    - Now we need to call setState() in order to get some changes. So we simply make a new method called `changeMessage()` but this time instead of using `this.state` we use `this.setState`, and add the things we want to change.  
    - Creating button => if you read the button code, you will see we call the function that is supposed to hold the setState, but to give it the value we just call the normal state (i.e. established by the constructor).
    <br>
    - **constructor explained**
        - Method used to initialize an object's state in a class.
        - In react component is called before the component is mounted (output).
    - **IMPORTANT**: you need to call **super(props)** before any other statement, because if you don't this.props() will be undefined in constructor and will lead to bug
        - **super(props)** 
            - `super` refers to parent class constructor. You can't use `this` in a constructor untill after you've called the parent constructor

## 16 working on UI in `app.js`
- adding code to `frontend/src/App.js`
- We have 4 hardcoded values
- RenderTablList renders 2 spans that controls set of items that are displayed. Click on completed we see something different and incomplete other things
- To add and edit taske we need to create a modal component

# REFERENCE
1. https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react 
2. https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs
3. https://www.javatpoint.com/reactjs-tutorial
4. https://www.django-rest-framework.org/


