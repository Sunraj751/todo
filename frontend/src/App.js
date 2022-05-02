import React, { Component } from "react";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description:"Buy stuff",
    completed:true,
  },
  {
    id:2 ,
    title: "Study",
    description:"Learn languages",
    completed:false,
  },
  {
    id: 3,
    title: "books",
    description:"Go to library",
    completed:true,
  },
  {
    id:4 ,
    title: "Article",
    description:"Write an article",
    completed:false,
  },
]

/**
 * class         = App extending Component
 * Description   = Base class using constructor to initialize the components before mounting them. Sets completed to false, and a task list which is todoList
 * Return        = Returns current state of the component
 */

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      viewCompleted:false,
      todoList: todoItems
    };
  }
    /**
     * Function      = displayCompleted
     * Parameters    = status
     * Description   = Takes in the status of completed task or incompleted task using an onclick event. It uses setState
     * Return        = Returns current state of the component. 
     */

    displayCompleted = (status) => {                    // It takes in the status as argument
      if(status){                                       // if status is true
        return this.setState({viewCompleted:true});
      }
        return this.setState({viewCompleted:false});      // if status is false
      };

    /**
    * Function      = renderTabList
    * Parameters    = None
    * Description   = Returns a UI with 2 buttons and calls the displayCompleted function while passing status as parameter either true or false.
    * Return        = None
    */

    renderTabList = () => {
      return(
        <div className = "nav nav-tabs">
          <span className={this.state.viewCompleted ? "nav-link active":"nav-link"} onClick={()=>this.displayCompleted(true)}>Complete</span>
          <span className={this.state.viewCompleted ? "nav-link":"nav-link active"} onClick={()=>this.displayCompleted(false)}>Incomplete</span>
        </div>
      );
    };

    renderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList.filter(
        (item) => item.completed === viewCompleted
      );

      return newItems.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.description}
          >
            {item.title}
          </span>
          <span>
            <button
              className="btn btn-secondary mr-2"
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
            >
              Delete
            </button>
          </span>
        </li>
      ));
    };

    render(){
      return (
        <main className="container">
          <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="mb-4">
                  <button
                    className="btn btn-primary"
                  >
                    Add task
                  </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush border-top-0">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </main>
      );
    };
  }
export default App;