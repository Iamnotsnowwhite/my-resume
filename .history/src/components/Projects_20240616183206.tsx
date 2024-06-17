import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projekts</h2>
      <ul>
        <li>
          <h3>Data Analysis with python</h3>
          <p>使用React和Node.js构建的个人博客平台，支持Markdown编辑和评论功能。</p>
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

export default Projects;
