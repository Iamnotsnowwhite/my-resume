// src/pages/AboutPage.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/scr/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>This is the about page where you can learn more about our mission and team.</p>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
