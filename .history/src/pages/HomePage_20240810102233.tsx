import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css'; // 确保你有这个CSS文件来处理样式

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="/my_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default HomePage;
