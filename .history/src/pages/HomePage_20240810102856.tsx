import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import '/Users/guoguo/Desktop/my-resume/src/components/homepage.css'; // 确保你有这个CSS文件来处理样式
import BackgroundVideo from '/Users/guoguo/Desktop/my-resume/src/components/backgroundvideo';

const HomePage: React.FC = () => {
  return (
      <div>
        <BackgroundVideo />
    </div>
  );
};

export default HomePage;