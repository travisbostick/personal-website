import React from 'react';

function PronounceBotPage() {
  return (
    <div className='container content mt-1'>
      <div className='row mx-3 mb-4'>
        <div className='col mb-2'>
          <img
            className='pbot-account'
            src='./images/projects/pronouncebot/account.png'
            alt='account'
          />
        </div>
        <div className='col mt-auto mb-auto'>
          <h1 className='display-6 mb-3'>@PronounceBot</h1>
          <p className='h6 mb-3'>A twitter bot that answers the question:</p>
          <p className='h6'>"How do you pronounce ____ ?"</p>
        </div>
      </div>
      <p className='intro mb-4'>
        My code searches for tweets asking how to pronounce words and
        @PronounceBot gives them the answer by tweeting the IPA (International
        Phonetic Alphabet) pronunciation as well as a link to a helpful guide
        for how to read the IPA. I find the pronunciation for words by using
        WordsAPI. When this API does not a have a match for the word,
        @PronounceBot tweets that even it doesn’t know how to pronounce that
        word.
      </p>
      <div className='row'>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet1.png'
            alt='tweet 1'
          />
        </div>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet2.png'
            alt='tweet 2'
          />
        </div>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet3.png'
            alt='tweet 3'
          />
        </div>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet4.png'
            alt='tweet 4'
          />
        </div>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet5.png'
            alt='tweet 5'
          />
        </div>
        <div className='col-lg-4 col-sm-6'>
          <img
            className='pbot-tweet'
            src='./images/projects/pronouncebot/tweet6.png'
            alt='tweet 6'
          />
        </div>
      </div>
      <p className='h4 mt-4'>@PronounceBot is not currently active</p>
    </div>
  );
}

export default PronounceBotPage;
