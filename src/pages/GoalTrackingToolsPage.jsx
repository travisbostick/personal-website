import React from 'react';
import FadeIn from 'react-fade-in';

function GoalTrackingToolsPage() {
  return (
    <div className='container content mt-1'>
      <FadeIn>
        <p className='intro'>
          I really enjoy experimenting with different ways to automate the way I
          track my habits. I've found{' '}
          <a href='https://www.beeminder.com/home'>Beeminder</a> to be the
          service that works best for me. However, it's very limited in certain
          ways. Luckily Beeminder has an API that has allowed me to expand its
          functionality.
        </p>
        <p className='intro'>
          <a href='https://github.com/travisbostick/notionminder'>
            Notionminder
          </a>{' '}
          is a NodeJS and iOS shortcut tool I made that takes all of the words
          in a Notion databases and sends the total count to Beeminder, allowing
          someone to conveniently track their progress on a Notion journal. To
          further improve the Notion journaling experience, I also created
          another{' '}
          <a href='https://github.com/travisbostick/quick-notion-journaling'>
            tool
          </a>{' '}
          to quickly open the current day's journal entry or create a new one if
          one does not exist.
        </p>
        <p className='intro'>
          I've also built an{' '}
          <a href='https://routinehub.co/shortcut/9195/'>iOS shortcut</a> that
          displays color-coded goals and allows for quick entering of data.
        </p>
        <p className='intro'>
          I love making these tools that I use constantly and will continue to
          improve the way I track my progress toward my goals.
        </p>
      </FadeIn>
    </div>
  );
}

export default GoalTrackingToolsPage;
