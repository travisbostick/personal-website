import React from 'react';
import Project from '../components/Project';
import videos from '../videos';
import FadeIn from 'react-fade-in';

function VideoPage() {
  return (
    <div className='software content'>
      <FadeIn>
        <div className='row'>
          {videos.map((project, index) => {
            project.key = index;
            return (
              <Project
                project={project}
                image={{ url: project.cover_img_url }}
              />
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}

export default VideoPage;
