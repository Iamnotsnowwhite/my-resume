import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '/Users/guoguo/Desktop/my-resume/locales/en/translation.json';
import translationCh from './locales/ch/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      zh: {
        translation: translationZh
      }
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 回退语言
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
