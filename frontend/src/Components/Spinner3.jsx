import React, { useState } from 'react';
import '../styles/Spinner3.css';

const Shapespinners = () => {
  const [selectedShape, setSelectedShape] = useState('circle');

  const handleShapeChange = (shape) => {
    setSelectedShape(shape);
  };

  const renderSpinners = () => {
    switch (selectedShape) {
      case 'circle':
        return (
          <>
            <div className="spinner circle" />
            <div className="spinner circle" />
            <div className="spinner circle" />
          </>
        );
      case 'square':
        return (
          <>
            <div className="spinner square" />
            <div className="spinner square" />
            <div className="spinner square" />
          </>
        );
      case 'triangle':
        return (
          <>
            <div className="spinner triangle" />
            <div className="spinner triangle" />
            <div className="spinner triangle" />
          </>
        );
      case 'rectangle':
        return (
          <>
            <div className="spinner rectangle" />
            <div className="spinner rectangle" />
            <div className="spinner rectangle" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="spinner-container">
      {renderSpinners()}
      <select
        className="shape-dropdown"
        value={selectedShape}
        onChange={(e) => handleShapeChange(e.target.value)}
      >
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="rectangle">Rectangle</option>
      </select>
    </div>
  );
};

export default Shapespinners;