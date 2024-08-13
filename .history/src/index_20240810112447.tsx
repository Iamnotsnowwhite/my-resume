import React from 'react';
import ReactDOM from 'react-dom/client';
import '/Users/guoguo/Desktop/my-resume/src/index.css';
import '/Users/guoguo/Desktop/my-resume/src/App.css';
import App from '/Users/guoguo/Desktop/my-resume/src/App';
import '/Users/guoguo/Desktop/my-resume/src/i18n';
// import reportWebVitals from '/Users/guoguo/Desktop/my-resume/src/reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
