import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/Users/guoguo/Desktop/my-resume/src/pages/HomePage';
import AboutPage from '/Users/guoguo/Desktop/my-resume/src/pages/AboutPage';
import ContactPage from '/Users/guoguo/Desktop/my-resume/src/pages/ContactPage';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '/Users/guoguo/Desktop/my-resume/src/components/LanguageSwitcher';
import'/Users/guoguo/Desktop/my-resume';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <LanguageSwitcher />
      {/* <button onClick={() => changeLanguage('ch')}>chinese</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button> */}
      <Footer />
    </Router>
  );
};

export default App;
