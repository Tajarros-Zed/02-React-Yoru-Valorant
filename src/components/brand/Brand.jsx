import React from 'react';
import './brand.css';
import {valorant, league, tactics, callduty} from './imports'

const Brand = () => {
  return (
    <div className='fakeout__brand section__padding'>
      <div>
        <img src={valorant} alt="valorant" />
      </div>

      <div>
        <img src={league} alt="league" />
      </div>

      <div>
        <img src={tactics} alt="tactics" />
      </div>

      <div>
        <img src={callduty} alt="callduty" />
      </div>
    </div>
  )
}

export default Brand