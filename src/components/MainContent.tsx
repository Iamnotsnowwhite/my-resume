import React from 'react';
import { useTranslation } from 'react-i18next';

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <li>
          <p>{t('This is my homepage.... test test test!!!')}</p>
        </li>
        {children && (
          <li>
            <div>{children}</div>
          </li>
        )}
      </section>
    </div>
  );
};

export default MainContent;
