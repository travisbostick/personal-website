import React from 'react';

function ProCyclingSchedulePage() {
  return (
    <div>
      <div className='container content mt-1'>
        <p className='intro'>
          The{' '}
          <a href='https://www.uci.org/road/calendar'>
            UCI Road Cycling Calendar
          </a>{' '}
          is a mess. I wanted to create a far superior interface for cycling
          fans to know when the big upcoming races are happening. So I created a
          web app to do exactly that.
        </p>
        <img
          className='big-image'
          src='./images/projects/pro cycling schedule/cover.png'
          alt='calendar image'
        />
        <p className='intro'>
          I really enjoyed building this calendar from scratch using{' '}
          <a href='https://reactjs.org'>React</a>. The data comes from the{' '}
          <a href='https://developer.sportradar.com'> Sportradar API</a> and I'm
          using{' '}
          <a href='https://firebase.google.com/docs/firestore'>
            Cloud Firestore
          </a>{' '}
          for the database.
        </p>
        <p className='intro'>
          Code can be found{' '}
          <a href='https://github.com/travisbostick/pro-cycling-schedule'>
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ProCyclingSchedulePage;
