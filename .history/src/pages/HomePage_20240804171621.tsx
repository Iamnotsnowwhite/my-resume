// src/pages/HomePage.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

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
