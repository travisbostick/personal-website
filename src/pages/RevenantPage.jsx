import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';

function RevenantPage() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const IMAGES = {
    titles: {
      url: './images/projects/revenant game/titles.gif'
    },
    gameplay: {
      url: './images/projects/revenant game/gameplay.gif'
    },
    instructions: {
      url: './images/projects/revenant game/instructions.png'
    }
  };

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = err => reject(err);
      });
    };
    Promise.all(Object.entries(IMAGES).map(image => image[1]))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log('Failed to load images', err));
  }, []);

  return (
    <div className='container content'>
      {imgsLoaded && (
        <FadeIn>
          <div className='row mb-5'>
            <p className='col intro mt-auto mb-auto'>
              I programmed a fully functioning Game Boy game based on the movie{' '}
              <i>The Revenant</i>.
            </p>
            <img
              className='col big-image'
              src={IMAGES.titles.url}
              alt='titles'
            />
          </div>
          <div className='row'>
            <img
              className='col big-image'
              src={IMAGES.gameplay.url}
              alt='gameplay'
            />
            <p className='col intro mt-auto mb-auto'>
              This was adapted from <i>8-bit Cinema</i>'s video, with all the
              art recreated by me in Usenti. The game is programmed in C.
            </p>
          </div>
          <img
            className='big-image mt-5'
            src={IMAGES.instructions.url}
            alt='instructions'
          />
          <p className='intro'>
            Code can be found{' '}
            <a href='https://github.com/travisbostick/the-revenant-game'>
              here
            </a>
            .
          </p>
        </FadeIn>
      )}
    </div>
  );
}

export default RevenantPage;
