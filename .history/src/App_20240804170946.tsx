import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function HomePage() {
  return <h2>Home Page</h2>;
}

function AboutPage() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
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
