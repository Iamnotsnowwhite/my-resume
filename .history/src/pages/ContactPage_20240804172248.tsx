// src/pages/ContactPage.tsx

import React from 'react';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import ContactForm from '/Users/guoguo/Desktop/my-resume/src/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact me</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
