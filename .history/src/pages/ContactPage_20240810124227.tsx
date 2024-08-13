// src/pages/ContactPage.tsx
import React from 'react';
import ContactForm from '/Users/guoguo/Desktop/my-resume/src/components/Contact';
import '/Users/guoguo/Desktop/my-resume/src/chatbox.css';

const ContactPage: React.FC = () => {
  return (
    <div>
      <main>
        <h1>Contact me</h1>
        <ContactForm />
      </main>
    </div>
  );
}

export default ContactPage;
