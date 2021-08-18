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
          web app to do exactly that. It can be found at{' '}
          <a href='https://www.procyclingschedule.com'>
            procyclingschedule.com
          </a>
          .
        </p>
        <img
          className='big-image'
          src='./images/projects/pro cycling schedule/cover.png'
          alt='calendar image'
        />
        <p className='intro'>
          The calendar is made in <a href='https://reactjs.org'>React</a>. I
          initially built an entire calendar from scratch but am now using the{' '}
          <a href='https://fullcalendar.io'>FullCalendar</a> framework to
          display the events. The data comes from the{' '}
          <a href='https://developer.sportradar.com'> Sportradar API</a> and I'm
          using{' '}
          <a href='https://firebase.google.com/docs/firestore'>
            Cloud Firestore
          </a>{' '}
          for the database.
        </p>
        <p className='intro'>
          It's still very much a work in progress and I plan to continue
          improving its design and functions.
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
