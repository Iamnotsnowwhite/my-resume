import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';
import ReactPlayer from 'react-player';

const BackgroundVideo: React.FC = () => {
    return (
        <div className="homepage-container">
          <div className="video-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="content">
          </div>
        </div>
      );
    };
export default BackgroundVideo;
