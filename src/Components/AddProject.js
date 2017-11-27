import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class AddProject extends Component {

// We want to store the data that we submit into state
    constructor () {
        super();
        this.state = {
            newProject: {}
        }
    }

// We want category to be property of component. So we can set default properties
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }


// 

    handleSubmit(e) {
       if(this.refs.title.value === '') {
        alert('Title is required');
       } else {
           this.setState({newProject:{
               uuid: uuid.v4(),
               title: this.refs.title.value,
               category: this.refs.category.value
           }}, function() {
            //    console.log(this.state);
            this.props.addProject(this.state.newProject);
           });
       }
        e.preventDefault();
    }

// We need to use HTML5 syntax or we get an error
// We want to map though to output categories (above) options
  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" />    
            </div> 
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>  
            </div> 
            <br />
            <input type="submit" value="Submit" />   
            <br />
        </form>
      </div>
    );
  }
}

// Validation

AddProject.propTypes = {    
    projects:PropTypes.array,    
    addProject:PropTypes.func
  };

export default AddProject;
