import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';
import ReactPlayer from 'react-player';

const BackgroundVideo: React.FC = () => {
    return (
        <div className="homepage-container">
          <div className="video-container">
            <ReactPlayer
              url="https://youtu.be/A53nWs7l6JI?si=Tg8TL9aR7tLnRTJ9D"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      );
    };
export default BackgroundVideo;
