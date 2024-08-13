import React from 'react';
import MainContent from '/Users/guoguo/Desktop/my-resume/src/components/MainContent';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css'; // 确保你有这个CSS文件来处理样式
import BackgroundVideo from '/Users/guoguo/Desktop/my-resume/src/components/backgroundvideo';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* 背景视频 */}
      <div className="content-container">
        <MainContent/>
        <BackgroundVideo />
      </div>
    </div>
  );
};

export default HomePage;
