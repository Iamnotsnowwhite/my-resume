import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <p>E-mail: weizhaoguo@hotmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/zhaoguo-wei-282473306">zhaoguo_Wei</a></p>
      <p>GitHub: <a href="https://github.com/Iamnotsnowwhite">Iamnotsnowwhite</a></p>
    </section>
  );
};

export default Contact;
