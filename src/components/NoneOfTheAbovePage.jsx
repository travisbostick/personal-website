import React from 'react';
import YouTube from 'react-youtube';

function NoneOfTheAbovePage() {
  return (
    <div className='mx-4 content'>
      <h1 className='mb-3'>
        <i>None of the Above</i>
      </h1>
      <p className='intro'>
        In Summer 2018, I directed and edited a documentary about the Atlanta
        Public Schools cheating scandal. The short film was made within the span
        of one month with no budget and camera equipment borrowed from the
        school.
      </p>
      <div className='video-wrapper'>
        <YouTube className='video' videoId='ryP_NEMwH7c' />
      </div>
      <div className='row mt-4'>
        <p className='col-md-6 col-sm-12 my-auto intro'>
          With the assistance of three other students, I conducted interviews
          with the journalists from The Atlanta Journal Constitution that
          uncovered the bombshell story.
        </p>
        <div className='col-md-6 col-sm-12'>
          <img
            className='col big-image'
            src='./images/video/documentary/AJC.png'
            alt='AJC'
          />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-6 col-sm-12 pb-4'>
          <img
            className='big-image'
            src='./images/video/documentary/John.png'
            alt='AJC'
          />
        </div>
        <div className='col-md-6 col-sm-12 pt-4'>
          <img
            className='big-image'
            src='./images/video/documentary/Alan.png'
            alt='AJC'
          />
        </div>
      </div>
      <div>
        <img
          className='big-image'
          src='./images/video/documentary/Atlanta.png'
          alt='AJC'
        />
      </div>
    </div>
  );
}

export default NoneOfTheAbovePage;
