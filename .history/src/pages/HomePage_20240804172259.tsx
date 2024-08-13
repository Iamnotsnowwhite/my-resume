// src/pages/HomePage.tsx

import React from 'react';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import MainContent from '/Users/guoguo/Desktop/my-resume/src/components/MainContent';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;
