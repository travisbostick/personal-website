import React from 'react';

function RevenantPage() {
  return (
    <div className='container content'>
      <div className='row mb-5'>
        <p className='col intro mt-auto mb-auto'>
          I programmed a fully functioning Game Boy game based on the movie{' '}
          <i>The Revenant</i>.
        </p>
        <img
          className='col big-image'
          src='./images/projects/revenant game/titles.gif'
          alt='Titles'
        />
      </div>
      <div className='row'>
        <img
          className='col big-image'
          src='./images/projects/revenant game/gameplay.gif'
          alt='Gameplay'
        />
        <p className='col intro mt-auto mb-auto'>
          This was adapted from <i>8-bit Cinema</i>'s video, with all the art
          recreated by me in Usenti. The game is programmed in C.
        </p>
      </div>
      <img
        className='big-image mt-5'
        src='./images/projects/revenant game/instructions.png'
        alt='Gameplay'
      />
    </div>
  );
}

export default RevenantPage;
