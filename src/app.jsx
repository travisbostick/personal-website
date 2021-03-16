import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SoftwarePage from './components/SoftwarePage';
import SheetMusicPage from './components/SheetMusicPage';
import RevenantPage from './components/RevenantPage';
import PronounceBotPage from './components/PronounceBotPage';
import DataVisPage from './components/DataVisPage';
import DrawingWithProcessingPage from './components/DrawingWithProcessingPage';
import VideoPage from './components/VideoPage';
import NoneOfTheAbovePage from './components/NoneOfTheAbovePage';
import PromotionalVideosPage from './components/PromotionalVideosPage';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function App() {
  return (
    <div className='page'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/software' component={SoftwarePage} />
          <Route path='/sheet-music' component={SheetMusicPage} />
          <Route path='/video' component={VideoPage} />
          {/* <Route path='/contact' component={ContactPage} /> */}
          <Route path='/the-revenant' component={RevenantPage} />
          <Route path='/pronounce-bot' component={PronounceBotPage} />
          <Route path='/data-vis' component={DataVisPage} />
          <Route
            path='/drawing-with-processing'
            component={DrawingWithProcessingPage}
          />
          <Route path='/none-of-the-above' component={NoneOfTheAbovePage} />
          <Route path='/promotional-videos' component={PromotionalVideosPage} />
        </Switch>
      </Router>
      <footer className='container-fluid footer'>
        <a href='https://github.com/travisbostick' target='_blank'>
          <AiFillGithub className='icon m-3' />
        </a>
        <a href='mailto:traviswbostick@gmail.com'>
          <MdEmail className='icon m-3' />
        </a>
      </footer>
    </div>
  );
}

export default App;
