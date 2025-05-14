import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  const dummyText = `Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissenti eos cu eum an brute copiosae hendrerit.`;

  const postList = [
    { title: 'Post Title', date: 'Date / Time', location: 'Location Details Here', content: dummyText, imageLeft: true },
    { title: 'Post Title', date: 'Date / Time', location: 'Location Details Here', content: dummyText, imageLeft: false },
  ];

  return (
    <div className="posts-wrapper">
      <h1 className="updates-heading">Our Updates</h1>
      {postList.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      <div className="load-more-container">
        <button className="load-more-button">Load More Posts</button>
      </div>
    </div>
  );
};

export default Posts;
