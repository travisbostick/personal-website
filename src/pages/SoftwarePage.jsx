import React from 'react';
import Project from '../components/Project';
import projects from '../projects';
import FadeIn from 'react-fade-in';

function SoftwarePage() {
  return (
    <div className='software content'>
      <FadeIn>
        <div className='row'>
          {projects.map((project, index) => {
            project.key = index;
            return <Project {...project} />;
          })}
        </div>
      </FadeIn>
    </div>
  );
}

export default SoftwarePage;
