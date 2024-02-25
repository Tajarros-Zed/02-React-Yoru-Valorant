import React from 'react';
import './articles.css';

const Articles = ({ imgUrl, date, title }) => {
  return (
    <div className='fakeout__article-container_articles'>
      <div className='fakeout__article-container_articles-image'>
        <img src={imgUrl} alt='article' />
      </div>
      
      <div className='fakeout__article-container_articles-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Articles