import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

const BackgroundVideo: React.FC = () => {
    return (
        <div>
          <h2>This is a video!!!</h2>
          <video controls width="1000" height="6
          800">
            <source src="/my_video.webm" type="video/webm" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      );
    };

export default BackgroundVideo;
