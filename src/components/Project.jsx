import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
  return (
    <div className='project col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3'>
      <Link className='text-decoration-none' to={'/' + props.project.path}>
        <img
          className='project-cover'
          src={props.image.url}
          alt={props.project.name}
        />
        <h2 className='project-name'>{props.project.name}</h2>
      </Link>
    </div>
  );
}

export default Project;
