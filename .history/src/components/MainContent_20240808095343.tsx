import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div>
      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Freie Universität Berlin</h3>
            <p>B.Sc. Computer Science (Informatik) (2022 - now)</p>
          </li>
          <li>
            <h3>Friedrich Ebert Gymnasium</h3>
            <p>Graduated in 2022</p>
          </li>
        </ul>
      </section>
      <section id="experience">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Freie Universität Berlin</h3>
            <p>B.Sc. Computer Science (Informatik) (2022 - now)</p>
          </li>
          <li>
            <h3>Friedrich Ebert Gymnasium</h3>
            <p>Graduated in 2022</p>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Data Analysis with Python</h3>
            <p>Object-Oriented Programming Project</p>
            <a href="#">Have a look</a>
          </li>
          {/* <li>
            <h3>在线聊天室</h3>
            <p>一个基于WebSocket的实时聊天应用，支持多人聊天和私聊。</p>
            <a href="https://github.com/yourusername/chat-project">查看项目</a>
          </li> */}
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: JavaScript, TypeScript, Python, Java, C/C++, Haskell</li>
          <li>Front-End: React, HTML, CSS</li>
          <li>Back-End: Node.js, Express, MongoDB</li>
          <li>Tools: Git</li>
          <li>Design: Flyer production</li>
          <li>Illustration/Painting: More realistic style</li>
          <li>Tools/Programs (Computer): Adobe Illustrator, Photoshop, InDesign, Blender</li>
          <li>Tools/Programs (iPad): Procreate, Nomad</li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent;
