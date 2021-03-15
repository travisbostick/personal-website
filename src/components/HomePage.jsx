import React from 'react';
import NameCard from './NameCard';

function HomePage() {
  return (
    <div>
      <div className='container-fluid home'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col'>
            <NameCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
