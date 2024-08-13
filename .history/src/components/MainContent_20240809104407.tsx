import React from 'react';
import { useTranslation } from 'react-i18next';

const MainContent: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div>
    <section>
      <li>
        <p>This is my homepage.... test test test!!!</p>
      </li>
    </section>
    </div>
  );
};

export default MainContent;
