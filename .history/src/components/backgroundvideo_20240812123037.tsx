import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

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
            <h1>Welcome to My Website</h1>
            <p>This is some content below the video.</p>
          </div>
        </div>
      );
    };
export default BackgroundVideo;
