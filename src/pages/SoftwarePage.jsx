import React from 'react';
import Project from './Project';
import projects from '../projects';

function SoftwarePage() {
  return (
    <div className='software content'>
      <div className='row'>
        {projects.map((project, index) => {
          project.key = index;
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}

export default SoftwarePage;
