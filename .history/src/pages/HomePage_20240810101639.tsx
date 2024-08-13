// src/pages/HomePage.tsx

import React from 'react';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import MainContent from '/Users/guoguo/Desktop/my-resume/src/components/MainContent';
import BackgroundVideo from '../components/backgroundvideo';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/Users/guoguo/Desktop/my-resume/sr/my_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is some content below the video.</p>
      </div>
    </div>
  );
};