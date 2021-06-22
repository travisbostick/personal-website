import React from 'react';

function IQBankPage() {
  return (
    <div className='container content mt-1'>
      <div className='row mb-5'>
        <p className='col intro mt-auto mb-auto'>
          I designed and did most of the development for <i>IQBank</i>, which is
          an interactive question bank for professors to view, enter, edit,
          search, filter, group, import, and export their assignment and test
          questions.
        </p>
        <img
          className='col big-image'
          src='./images/projects/iqbank/editing questions.gif'
          alt='editing questions'
        />
      </div>
      <div className='row mb-5'>
        <img
          className='col big-image'
          src='./images/projects/iqbank/filtering questions.gif'
          alt='filtering questions'
        />
        <p className='col intro mt-auto mb-auto'>
          There are a plethora of different ways to find questions.
        </p>
      </div>
      <div className='row mb-5'>
        <p className='col intro mt-auto mb-auto'>
          The web app features a robust authentication system as well as support
          for text formatting among its many features.
        </p>
        <img
          className='col big-image'
          src='./images/projects/iqbank/logging in.gif'
          alt='logging in'
        />
      </div>
      <p className='intro'>
        This project was built using React, Hooks, NodeJS, Express, MongoDB,
        React Testing Library, Auth0, DraftJS, SemanticUI, Bootstrap, and React
        Table.
      </p>
    </div>
  );
}

export default IQBankPage;
