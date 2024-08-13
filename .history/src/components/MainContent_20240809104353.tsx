import React from 'react';
import { useTranslation } from 'react-i18next';

const MainContent: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div>
    <section>
      <li>
        <p>This is </p>
      </li>
    </section>
    </div>
  );
};

export default MainContent;
