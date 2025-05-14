import React from 'react';
import './Post.css';

const Post = ({ title, date, location, content, imageLeft = true }) => {
  return (
    <div className={`post-container ${imageLeft ? 'image-left' : 'image-right'}`}>
      <div className="post-image">
        <img src="../src/assets/homeBackground.jpeg" alt="Post" />
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p className="post-meta">{date}<br />{location}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
