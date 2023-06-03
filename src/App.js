import React from 'react';

//import clockcountdown

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'

//Clock CSS
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

//Import video 
import VideoBg from '../src/assets/video.mp4'

//Import style.css file
import './styles.css'

const App = () => {
  return <section>
    <div className='page'>
      {/* Overlay */}
      <div className='overlay'></div>

      {/* Video */}
    <video src={VideoBg} autoPlay loop muted></video>
    <div className='page-content'>
      <h1>
        launching Soon
      </h1>
      <h3>
        Leve your email, we'll let you once site goes Live
      </h3>

      {/* clock */}
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock '
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      
      <button className='btn'>Notify me</button>

    </div>
    </div>

    

  </section>;
};

export default App;
