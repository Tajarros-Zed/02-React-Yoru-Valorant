import React from 'react';
import './biography.css';
import { Feature } from '../../components';


const Biography = () => {
    return (
        <div className='fakeout__biography section__margin' id='biography'>
            <div className='fakeout__biography-feature'>
                <Feature title="Yoru" text="A radiant from Tokyo, Japan, Kiritani Ryo (Japanese: 桐谷 諒) is a man dedicated to uncovering his past. Specifically interested in his ancestors and an ancient order of samurai, Kiritani's search has kept on bringing him to Kingdom's S22 container port. On his first visit, he broke into the facility and stole a mask from a set of samurai armor that allowed him to see into another dimension."/>
            </div>

            <div className='fakeout__biography-heading'>
                <h1 className='heading__text'>I'll fight anybody. I'll fight everybody</h1>
                <p>Read More Biography</p>
            </div>

            <div className='fakeout__biography-container'>
                <Feature title="Agent" text="Recruited by the Valorant Protocol as its fifteenth agent, equipped with unrivaled cybernetic enhancements and a tactical prowess to redefine the battlefield."/>
                <Feature title="Obsession" text="Yoru persists in revisiting the site despite Protocol directives, uncovering insights on radianite and his ability to access alternate dimensions."/>
                <Feature title="Echo" text="Yoru stumbles upon a rift in the ship's dimensional fabric, experiencing a temporal journey and hearing a familiar voice before the rift abruptly closes."/>
            </div>
        </div>
    )
}

export default Biography