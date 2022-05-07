import React from 'react';

const LoadingSpinner = props => {
  // inyectar el keyframe
  const animationName = `animation-spinner`;
  const primaryColor = '#4b3eb8';
  const secondaryColor = '#a098ed';


  const keyframes =
    `@-webkit-keyframes ${animationName} {
      0% { transform: rotate( 0deg ); border-color: ${primaryColor}; border-top-color: transparent; }
      50% { transform: rotate( 180deg ); border-color: ${secondaryColor}; border-top-color: transparent; }
      100% { transform: rotate( 360deg ); border-color: ${primaryColor}; border-top-color: transparent; }
    }`;
  injectStyle(keyframes);


  return <div style={{ ...styles.spinner, ...props.style }}></div>
};


const styles = {
  spinner: {
    width: '40px',
    height: '40px',
    border: 'solid 5px #4b3eb8',
    borderRadius: '50%',
    borderTopColor: 'transparent',
    animation: 'animation-spinner 1s infinite linear'
  }
};

const injectStyle = (style) => {
  const styleElement = document.createElement('style');
  let styleSheet = null;

  document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;

  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

export default LoadingSpinner;
