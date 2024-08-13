import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '/Users/guoguo/Desktop/my-resume/src/components/MainContent';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css'; // 确保你有这个CSS文件来处理样式
import BackgroundVideo from '/Users/guoguo/Desktop/my-resume/src/components/backgroundvideo';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* 背景视频 */}
      <BackgroundVideo />

      {/* 页面内容 */}
      <div className="content-container">
        <Header />
        <MainContent>
          <h1>Welcome to My Website</h1>
          <p>This is some content below the video.</p>
        </MainContent>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
