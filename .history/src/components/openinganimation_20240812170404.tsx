@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .opening-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333; /* 开场动画的背景颜色 */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 10000; /* 确保开场动画在最上层 */
    opacity: 0;
    animation: fadeIn 2s ease-out forwards;
    animation-delay: 0.5s;
  }
  
  .opening-animation.hidden {
    display: none;
  }
  