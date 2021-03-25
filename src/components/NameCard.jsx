import React from 'react';
import Role from './Role';

function NameCard() {
  return (
    <div className='nameCard container'>
      <h2 className='name'>TRAVIS BOSTICK</h2>
      <Role text='Developer' />
      <div>
        <h1 className='role'>
          <span className='plus'>&nbsp;&nbsp;+ </span>
          Musician
        </h1>
      </div>
      <div className='underline'></div>
    </div>
  );
}

export default NameCard;
