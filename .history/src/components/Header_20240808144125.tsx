import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header>
      {/* <img src={} alt="Logo" /> */}
      <h2>{t(Welcome to my website!")}</h2>
      <h1>Zhaoguo Wei</h1>
      <nav>
        <ul>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
