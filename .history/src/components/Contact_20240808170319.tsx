import React, { useState, useTransition } from 'react';


const Contact: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <section id="contact">
      <p>E-mail: weizhaoguo@hotmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/zhaoguo-wei-282473306">zhaoguo_Wei</a></p>
      <p>GitHub: <a href="https://github.com/Iamnotsnowwhite">Iamnotsnowwhite</a></p>
    </section>
  );
};

export default Contact;
