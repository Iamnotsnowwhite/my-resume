import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

const BackgroundVideo: React.FC = () => {
    return (
      <div className="video-background">
        <video autoPlay loop muted className="video-content">
          <source src="/my_video.mp4" type="video/m" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

export default BackgroundVideo;
