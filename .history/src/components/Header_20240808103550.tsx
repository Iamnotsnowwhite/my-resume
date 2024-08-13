import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '/Users/guoguo/Desktop/my-resume/src/未命名作品.png'; // maybe a picture from me...

const Header: React.FC = () => {
  return (
    <header>
      {/* <img src={} alt="Logo" /> */}
      <h2>Welcome to my website!</h2>
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
