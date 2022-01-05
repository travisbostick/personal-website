import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SoftwarePage from './pages/SoftwarePage';
import SheetMusicPage from './pages/SheetMusicPage';
import RevenantPage from './pages/RevenantPage';
import PronounceBotPage from './pages/PronounceBotPage';
import DataVisPage from './pages/DataVisPage';
import IQBankPage from './pages/IQBankPage';
import ProCyclingSchedulePage from './pages/ProCyclingSchedulePage';
import GoalTrackingToolsPage from './pages/GoalTrackingToolsPage';
import DrawingWithProcessingPage from './pages/DrawingWithProcessingPage';
import VideoPage from './pages/VideoPage';
import NoneOfTheAbovePage from './pages/NoneOfTheAbovePage';
import PromotionalVideosPage from './pages/PromotionalVideosPage';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import KeyCalendarPage from './pages/KeyCalendarPage';

function App() {
  return (
    <div className='page'>
      <Router>
        <Navigation />
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/software' component={SoftwarePage} />
            <Route path='/sheet-music' component={SheetMusicPage} />
            <Route path='/video' component={VideoPage} />
            <Route path='/keycalendar' component={KeyCalendarPage} />
            {/* <Route path='/contact' component={ContactPage} /> */}
            <Route path='/iqbank' component={IQBankPage} />
            <Route
              path='/pro-cycling-schedule'
              component={ProCyclingSchedulePage}
            />
            <Route path='/the-revenant' component={RevenantPage} />
            <Route path='/pronounce-bot' component={PronounceBotPage} />
            <Route
              path='/goal-tracking-tools'
              component={GoalTrackingToolsPage}
            />
            <Route path='/data-vis' component={DataVisPage} />
            <Route
              path='/drawing-with-processing'
              component={DrawingWithProcessingPage}
            />
            <Route path='/none-of-the-above' component={NoneOfTheAbovePage} />
            <Route
              path='/promotional-videos'
              component={PromotionalVideosPage}
            />
          </Switch>
        </div>
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
