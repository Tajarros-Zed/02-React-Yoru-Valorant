import React from 'react'
import AppearanceImage from '../../assets/AppearanceImage.png';
import './appearance.css';

const Appearance = () => {
  return (
    <div className='fakeout__appearance section__padding' id='appearance'>
      <div className='fakeout__appearance-image'>
        <img src={AppearanceImage} alt="appearance" />
      </div>

      <div className='fakeout__appearance-content'>
        <h4>Yoru Appearance</h4>
        <h1 className='heading__text'>Don't stop fighting. You must keep going, even if you are the only one</h1>
        <p>Yoru has spiked hair with two shades of blue, one light and the other being much darker. He sports a black ear piercing on the lobe of either ear, and he has a slit on his left eyebrow. The most notable part of his uniform is his unique blue jacket that has two spikes on both shoulders.</p>
        <h4>Read More Appearance</h4>
      </div>
    </div>
  )
}

export default Appearance