import React from 'react';
import FadeIn from 'react-fade-in';

function ProCyclingSchedulePage() {
  return (
    <div className='container content mt-1'>
      <FadeIn>
        <p className='intro'>
          As a fan of pro cycling, and with so many races on the calendar, it
          can be hard to know when they're taking place. The official schedules
          that do exist are cluttered and inconvenient. I wanted to create a far
          superior interface for cycling fans to know when the big upcoming
          races are happening. So I created a web app to do exactly that. It can
          be found at{' '}
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
          The front end is made in <a href='https://reactjs.org'>React</a> using
          the <a href='https://fullcalendar.io'>FullCalendar</a> framework for
          the calendar. There are filtering features for men's and women's races
          and event details are displayed when hovering over events.
        </p>
        <p className='intro'>
          The back end is made using Node.js and Express and the site is hosted
          on Heroku.
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
        <div className='mb-4'></div>
      </FadeIn>
    </div>
  );
}

export default ProCyclingSchedulePage;
