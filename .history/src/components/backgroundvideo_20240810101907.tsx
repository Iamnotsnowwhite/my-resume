import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src="/my_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* 其他内容 */}
      </div>
    </div>
  );
};

export default HomePage;
