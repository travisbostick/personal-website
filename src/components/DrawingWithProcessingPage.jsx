import React from 'react';

function DrawingWithProcessingPage() {
  return (
    <div className='mx-4 content'>
      <p className='intro'>
        This project uses Processing to mimic a pond, allowing the user to
        create ripples with a stick or rock. This was made to explore the
        different ways we can interact and engage with technology as a creative
        and meaningful experience.
      </p>
      <img
        className='big-image mb-4'
        src='./images/projects/processing drawing/demo 1.gif'
        alt=''
      />
      <img
        className='big-image'
        src='./images/projects/processing drawing/demo 2.gif'
        alt=''
      />
    </div>
  );
}

export default DrawingWithProcessingPage;
