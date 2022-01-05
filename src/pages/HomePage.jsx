import React from 'react';
import NameCard from '../components/NameCard';
import FadeIn from 'react-fade-in';

function HomePage() {
  return (
    <div>
      <div className='home'>
        <div className='homeCard'>
          <FadeIn transitionDuration={1000}>
            <NameCard />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
