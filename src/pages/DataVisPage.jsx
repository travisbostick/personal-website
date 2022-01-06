import React from 'react';
import FadeIn from 'react-fade-in';

function DataVisPage() {
  return (
    <div className='container content mt-1'>
      <FadeIn>
        <p className='intro'>
          This project explores the way data can be visualized and interacted
          with. Using a very large data set of images taken by specific people
          at specific times, this program visualizes the accumulation of
          photographs by each person over time. It also allows for viewing the
          photos by hovering over the lines, as well as clicking to highlight
          the line, distinguishing it from the rest.
        </p>
        <img className='big-image' src='./images/projects/data vis/demo.gif' />
        <div className='mt-4'></div>
      </FadeIn>
    </div>
  );
}

export default DataVisPage;
