import React from 'react';
import { useTranslation } from 'react-i18next';
import '/Users/guoguo/Desktop/my-resume/src/LanguageSwitcher.css';  // 使用相对路径导入 CSS

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
