// src/pages/ContactPage.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
