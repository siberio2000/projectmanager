import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This is displays once we add item in the text field

class ProjectItem extends Component {

  // We want to click on this component, and pass it in to the main component, and the then do the final delete there
  // So we have two components - Projects.js and App.js. We need to pass it to the Projects.js, and then to the App.js (main one)

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

        {/* To check how works uuid. uuid generates random classes. To install - npm install --save uuid */}
        {/* <b>{this.props.project.id}</b> - {this.props.project.category} */}
      </li>
    );
  }
}

ProjectItem.propTypes = {
      projects:PropTypes.array,    
      onDelete:PropTypes.func
    };

export default ProjectItem;
