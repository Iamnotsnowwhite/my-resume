import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;

  );
}


// const App: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <About />
//       <Education />
//       <Experience />
//       <Projects />
//       <Skills />
//       <Contact />
//     </div>
//   );
// };

export default App;
