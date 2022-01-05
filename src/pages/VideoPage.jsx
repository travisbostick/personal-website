import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import videos from '../videos';
import FadeIn from 'react-fade-in';

function VideoPage() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const IMAGES = videos.map((p, i) => {
    return { id: i, url: p.cover_img_url };
  });

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = err => reject(err);
      });
    };
    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log('Failed to load images', err));
  }, []);

  return (
    <div className='software content'>
      {imgsLoaded && (
        <FadeIn>
          <div className='row'>
            {videos.map((project, index) => {
              project.key = index;
              return (
                <Project key={index} project={project} image={IMAGES[index]} />
              );
            })}
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default VideoPage;
