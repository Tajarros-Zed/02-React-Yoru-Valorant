import React from 'react';
import './article.css';
import { Articles } from '../../components';
import {article01, article02, article03, article04, article05} from './imports';

const Article = () => {
  return (
    <div className='fakeout__article section__padding' id='article'>
      <div className='fakeout__article-heading'>
        <h1 className='heading__text'>Pick something nice to kill them with. it's the least we can do</h1>
      </div>

      <div className='fakeout__article-container'>
        <div className='fakeout__article-container__groupA'>
          <Articles imgUrl={article01} date='Feb 25 2024' title='These guys caught me in a mood. Bad luck for them'/>
        </div>

        <div className='fakeout__article-container__groupB'>
          <Articles imgUrl={article02} date='Feb 26 2024' title='Five enemies. Five for me, none for anyone else'/>
          <Articles imgUrl={article03} date='Feb 27 2024' title='Ill pick them apart. You clean up whatevers left'/>
          <Articles imgUrl={article04} date='Feb 28 2024' title='I like you guys a lot better when we dont lose'/>
          <Articles imgUrl={article05} date='March 01 2024' title='Your biggest mistake was that you pissed me off'/>
        </div>
      </div>
    </div>
  )
}

export default Article