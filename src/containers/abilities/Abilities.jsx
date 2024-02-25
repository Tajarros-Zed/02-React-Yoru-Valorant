import React from 'react';
import { Feature } from '../../components'
import './abilities.css';

const abilitiesData = [
  {
    title: 'Fakeout',
    text: 'Equip an echo that transforms into a mirror image of Yoru when activated. Fire to instantly activate the mirror image and send it forward.'
  },
  {
    title: 'Blindside',
    text: 'Equip to rip an unstable dimensional fragment from reality. Fire to throw the fragment, activating a flash that winds up once it collides with a hard surface.'
  },
  {
    title: 'Gatecrash',
    text: 'Equip a rift tether. Fire to send the tether forward. Alt Fire to place a stationary tether. Activate to teleport to the tether location. Use to trigger a fake teleport.'
  },
  {
    title: 'Dimensional Drift',
    text: 'Equip a mask that can see between dimensions. Fire to drift into Yorus dimension, unable to be affected or seen by enemies from the outside. Reactive to exit Yorus dimension early.'
  }
]

const Abilities = () => {
  return (
    <div className='fakeout__abilities section__padding' id='abilities'>
      <div className='fakeout__abilities-heading'>
        <h1 className='heading__text'>Someone get me a bat, I'll finish this. It's easiest if I sneak in and kill everyone</h1>
        <p>Yoru Abilities</p>
      </div>

      <div className='fakeout__abilities-container'>
        {abilitiesData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Abilities