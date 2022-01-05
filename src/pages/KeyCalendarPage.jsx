import React from 'react';

export default function KeyCalendarPage() {
  return (
    <div className='container content mt-1'>
      <p className='intro'>
        When many people share a house, it can be hard to coordinate who is
        using it when. I made KeyCalendar to make it easy to see the days that
        are available, make and manage reservations, and communicate between
        members.
      </p>
      <img
        src='./images/projects/keycalendar/cover.png'
        alt='calendar image'
        className='big-image'
      />
      <p className='intro'>
        This project has become fairly large and is still in development. The
        basic functionality is in place but I plan on adding a house blog and
        more messaging features.
      </p>
      <p className='intro'>
        The front-end is built using React and TypeScript with FullCalendar and
        MaterialUI for styling.
      </p>
      <p className='intro'>
        The back-end is using Node.js, PostgreSQL, and a GraphQL API.
        Authentication is handled with JSON Web Tokens.
      </p>
      <p className='intro'>
        Code can be found{' '}
        <a href='https://github.com/travisbostick/keycalendar'>here</a>.
      </p>
      <div className='mb-4' />
    </div>
  );
}
