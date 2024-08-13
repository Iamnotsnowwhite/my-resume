// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
  return (
    <footer>
      <p>{© Zhao's Website. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
