import React, { useEffect, useState } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/openinganimation.css';

const OpeningAnimation: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 5000); // 动画显示3秒钟

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`opening-animation ${isHidden ? 'hidden' : ''}`}>
      Hello!
      Welcome to zhao's website!
    </div>
  );
};

export default OpeningAnimation;
