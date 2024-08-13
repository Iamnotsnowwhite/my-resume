// src/pages/HomePage.tsx

import React from 'react';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import MainContent from '/Users/guoguo/Desktop/my-resume/src/components/MainContent';
import BackgroundVideo from '../components/backgroundvideo';

const HomePage: React.FC = () => {
  return (
    <div>
      <MainContent />
      <BackgroundVideo />
    </div>
  );
}

export default HomePage;
