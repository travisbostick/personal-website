import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import projects from '../projects';
import FadeIn from 'react-fade-in';

function SoftwarePage() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const IMAGES = projects.map((p, i) => {
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
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-0 gap-x-5'>
            {projects.map((project, index) => {
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

export default SoftwarePage;
