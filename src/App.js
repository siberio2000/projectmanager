import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';


class App extends Component {
  constructor() {
    super();
    // Define initial state keys
    this.state = {
      projects: [],
      todos: []
    }
  }

//******************************************* data from outside API - https://jsonplaceholder.typicode.com/todos */
  getToDos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos:data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }


//******************************************* data from outside API - https://jsonplaceholder.typicode.com/todos */

  getProjects() {
     this.setState({projects: [
          {
            id:uuid.v4(),
            title: 'Business Website',
            category: 'Web Design'
          },
          {
            id:uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development'
          },
          {
            id:uuid.v4(),
            title: 'Ecommerce Shopping Cart',
            category: 'Web Development'
          }
        ]});
  }

  

/*      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> To fire projects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
We want to define state(code above), but not the actual data. For that we want to use life cycle method componentWillMount()
It fire off every time component been re-rendered
*/

componentWillMount() {
  this.getProjects();
  this.getToDos();
}
//      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> To fire projects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// This brings other data outside API (JSONplaceholder). This is get request
componentDidMount() {
  this.getToDos();
}


// State is a mutable meaning you don't wanna change it - you want to update it. So we want to get everything in it, push the new project to it, and set it again
handleAddProject(project) {
  let projects = this.state.projects; /* We grabbing what is already there */
  projects.push(project); /* And then take that and push on to it, the new project */
  this.setState({projects:projects}); /* And then re-set it */
}


// We want get it from the state. We want remove that project and then remove the state.
handleDeleteProject(id) {
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id); // Looks through the projects, find all the ids, and matched them to the current id thats been passed in. If it matches, its gonna be put in the index.
  projects.splice(index, 1); // Deletion
  this.setState({projects:projects}); /* And then re-set it */
}

// We passing state to projects
// This will be shown on the main page (Output)
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
