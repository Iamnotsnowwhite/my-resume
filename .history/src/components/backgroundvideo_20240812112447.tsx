import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

const BackgroundVideo: React.FC = () => {
    return (
        <div>
        <h2>My YouTube Video</h2>
        <video controls>
        <source src="path/to/your/my_video.mp4" type="video/mp4">
        您的浏览器不支持视频播放。
        </video>
          </div>
        </div>
      );
    };

export default BackgroundVideo;
