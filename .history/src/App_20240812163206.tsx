import React, { useEffect } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/Users/guoguo/Desktop/my-resume/src/pages/HomePage';
import AboutPage from '/Users/guoguo/Desktop/my-resume/src/pages/AboutPage';
import ContactPage from '/Users/guoguo/Desktop/my-resume/src/pages/ContactPage';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import LanguageSwitcher from '/Users/guoguo/Desktop/my-resume/src/components/LanguageSwitcher';
import '/Users/guoguo/Desktop/my-resume/src/i18n';
import ChatBox from './components/chatbox';

const App: React.FC = () => {
  useEffect(() => {
    createStarrySky();
  }, []);

  const createStarrySky = () => {
    const starrySky = document.querySelector('.starry-sky');
    const starsCount = 100; // 星星数量

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机设置星星的位置
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      
      // 随机设置星星的动画延迟
      star.style.animationDelay = Math.random() * 10 + 's';
      
      if (starrySky) {
        starrySky.appendChild(star);
      }
    }
  };

  return (
    <Router>
      <Header />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
      <div className="starry-sky">
        {/* 星光效果容器 */}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
