import React from 'react';
import Project from './Project';
import videos from '../videos';

function VideoPage() {
  return (
    <div className='software content'>
      <div className='row'>
        {videos.map((project, index) => {
          project.key = index;
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}

export default VideoPage;
