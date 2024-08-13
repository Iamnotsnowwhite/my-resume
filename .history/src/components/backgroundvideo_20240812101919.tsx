import React from 'react';
import '/Users/guoguo/Desktop/my-resume/src/homepage.css';

const BackgroundVideo: React.FC = () => {
    return (
        <div>
            <h2>Watch this video!</h2>
            <div className="video-container">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        );
    };

export default BackgroundVideo;
