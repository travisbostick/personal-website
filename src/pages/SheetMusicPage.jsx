import React from 'react';
import FadeIn from 'react-fade-in';

function SheetMusicPage() {
  return (
    <div className='container content'>
      <FadeIn>
        <p className='intro'>
          I often find piano recordings, performances, and YouTube covers that I
          want to play myself. If sheet music does not exist for these songs, I
          try to make my own.
        </p>
        <p className='intro'>
          Last year I started uploading my transcriptions online on Musescore,
          where they already have over 90,000 views.
        </p>
        <div className='intro link'>
          <a
            target='_blank'
            className='external-link'
            href='https://musescore.com/user/4002676'
          >
            <u>My Musescore page</u>
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

export default SheetMusicPage;
