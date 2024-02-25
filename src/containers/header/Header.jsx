import React from 'react';
import people from '../../assets/people.png';
import HeaderImage from '../../assets/HeaderImage.png';
import './header.css';

const Header = () => {
  return (
    <div className='fakeout__header section__padding' id='home'>

      <div className='fakeout__header-content'>
        <h1 className='heading__text'>Stepping into the shadows, I dance with the unknown.</h1>
        <p>Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.</p>

        <div className='fakeout__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type="button">Get Started</button>
        </div>

        <div className='fakeout__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access to visit in the last 24 hours</p>
        </div>
      </div>

      <div className='fakeout__header-image'>
        <img src={HeaderImage} alt="yoru" />
      </div>

    </div>
  )
}

export default Header