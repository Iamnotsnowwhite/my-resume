import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/backgroundvideo.css'; // 导入样式

const BackgroundVideo: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/my_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;

