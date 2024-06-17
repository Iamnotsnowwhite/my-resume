import React from 'react';
import logo from './logo512.png';

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h2>welcome to my website!</h2>
      <h1>Zhaoguo Wei</h1>
      <nav>
        <ul>
          <li><a href="#about">about me</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#experience">work experience</a></li>
          <li><a href="#projects">projekt</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
