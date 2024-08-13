import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

const BackgroundVideo: React.FC = () => {
    return (
        <div>
          <h2>This is a Video</h2>
          <video controls width="600" height="400">
            <source src="/my_video.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      );
    };

export default BackgroundVideo;
