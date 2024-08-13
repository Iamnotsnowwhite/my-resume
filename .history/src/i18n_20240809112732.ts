import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译文件
import translationEn from '/Users/guoguo/Desktop/my-resume/src/locales/en/translation.json';
import translationCh from '/Users/guoguo/Desktop/my-resume/locales/ch/translation.json';
import translationDe from '/Users/guoguo/Desktop/my-resume/locales/de/translation.json';

// 初始化 i18next
i18n
  .use(initReactI18next) // 将 i18n 集成到 React 中
  .use(LanguageDetector) // 使用浏览器语言检测插件
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      ch: {
        translation: translationCh,
      },
      de: {
        translation: translationDe,
      },
    },
    fallbackLng: 'en', // 当所选语言的翻译不可用时，回退到英语
    interpolation: {
      escapeValue: false, // React 已经自动进行转义
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // 设置语言检测的缓存方式
    },
  });

export default i18n;
