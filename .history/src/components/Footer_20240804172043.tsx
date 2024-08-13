// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>©  My Website. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
