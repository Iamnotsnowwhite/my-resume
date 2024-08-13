import React, { useEffect, useState } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/components/Openinganimation.css';

const OpeningAnimation: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000); // 动画显示3秒钟

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`opening-animation ${isHidden ? 'hidden' : ''}`}>
      Welcome to My Website!
    </div>
  );
};

export default OpeningAnimation;
