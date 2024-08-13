// src/pages/AboutPage.tsx

import React from 'react';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import About from '/Users/guoguo/Desktop/my-resume/src/components/about';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1><menu></menu></h1>
        <h2>
        <p>This is the about page where you can learn more about me.</p>
      </main>
      <About/>
      <Footer />
    </div>
  );
}

export default AboutPage;
