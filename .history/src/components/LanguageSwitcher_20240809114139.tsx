import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // 切换语言后关闭下拉菜单
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown}>
        {i18n.language.toUpperCase()} ▼
      </button>
      {isOpen && (
        <ul className="language-list">
          <li onClick={() => changeLanguage('en')}>English</li>
          <li onClick={() => changeLanguage('de')}>Deutsch</li>
          <li onClick={() => changeLanguage('ch')}>中文</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
