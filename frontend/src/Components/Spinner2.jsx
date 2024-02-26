import React, { useState, useEffect } from 'react';

const Spinner2 = () => {
  const [rotationCount, setRotationCount] = useState(0);
  const colors = ['#3498db', '#e74c3c', '#27ae60', '#f39c12']; // Add more colors as needed

  useEffect(() => {
    const spinner = document.getElementById('spinner');
    spinner.addEventListener('animationiteration', handleRotation);

    return () => {
      spinner.removeEventListener('animationiteration', handleRotation);
    };
  }, [rotationCount]);

  const handleRotation = () => {
    // Update color after every rotation
    setRotationCount((prevCount) => prevCount + 1);
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '5px solid transparent',
    borderTopColor: colors[rotationCount % colors.length],
    animation: 'spin 1s linear infinite',
  };

  return <div className="spinner" id="spinner" style={spinnerStyle}></div>;
};

export default Spinner2;
