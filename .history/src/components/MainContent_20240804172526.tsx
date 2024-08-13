import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Freie Universität Berlin</h3>
          <p> B.sc Computer science Informatik (2022 - now)</p>
        </li>
        <li>
          <h3>Friedrich Ebert Gymnasium</h3>
          <p>(graduated at 2022)</p>
        </li>
      </ul>
    </section>
  );
};



const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projekts</h2>
      <ul>
        <li>
          <h3>Data Analysis with python</h3>
          <p>object-oriented-programming Project</p>
          <a href="there is nothing!">have a look</a>
        </li>
        {/* <li>
          <h3>在线聊天室</h3>
          <p>一个基于WebSocket的实时聊天应用，支持多人聊天和私聊。</p>
          <a href="https://github.com/yourusername/chat-project">查看项目</a>
        </li> */}
      </ul>
    </section>
  );
};


export default <MainC></MainC>;
