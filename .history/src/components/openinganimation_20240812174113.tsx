import React, { useEffect, useState } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/openinganimation.css';

const OpeningAnimation: React.FC = () => {
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsHidden(true); // 在动画结束后隐藏开场动画
      }, 7000); // 确保时间与动画时长一致
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={`opening-animation ${isHidden ? 'hidden' : ''}`}>
        <h2>Welcome to My Website</h1>
      </div>
    );
  };
  
  export default OpeningAnimation;
  