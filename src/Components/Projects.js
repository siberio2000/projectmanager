import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

// ******************************************************************************************************
// Test to see if there any other projects
// Since its array we want to map through
// Console log log to see if we actually getting projects
// We want return it and pass in each project as property project={project}
// As long as  Each child in an array or iterator should have a unique "key" prop. we set key={project.title}
  render() {
    let projectItems;
    
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //  console.log(project); 
         return (
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
         );
      });
    }
    
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
       {projectItems}
      </div>
    );
  }
}

// Validation

Projects.propTypes = {    
  projects:PropTypes.array,    
  onDelete:PropTypes.func
};

export default Projects;
