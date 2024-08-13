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
                src="https://youtu.be/A53nWs7l6JI?si=xF-sPdZtX2O4vhNc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-popups"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        );
    };

export default BackgroundVideo;