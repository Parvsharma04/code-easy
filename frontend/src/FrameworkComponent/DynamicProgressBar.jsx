import React, { useEffect } from "react";
import './DynamicProgressBar.css';
import '../styles/ProgressBarDocs.css'

const DynamicProgressBar = ()=> {
  useEffect(()=>{
    document.getElementById('percentageInput-dynamic').addEventListener('input', () => {
      let val = document.getElementById('percentageInput-dynamic').value;
      updateProgressBarDynamic(val);
    })
  
    function updateProgressBarDynamic(value) {
      const progressBarDynamic = document.getElementById('progress-bar-dynamic');
      const progressDynamic = document.getElementById('progress-container-dynamic');
      progressBarDynamic.style.width = value + '%';
      if (value < 30) {
        progressBarDynamic.style.backgroundColor = "red";
        progressDynamic.style.borderColor = "red";
      } else if (value >= 30 && value < 60) {
        progressBarDynamic.style.backgroundColor = "orange";
        progressDynamic.style.borderColor = "orange";
      } else if (value >= 60 && value <= 80) {
        progressBarDynamic.style.backgroundColor = "#3d7ae3";
        progressDynamic.style.borderColor = "#3d7ae3";
      } else if (value >= 80 && value <= 90) {
        progressBarDynamic.style.backgroundColor = "blue";
        progressDynamic.style.borderColor = "blue";
      } else {
        progressBarDynamic.style.backgroundColor = "green";
        progressDynamic.style.borderColor = "green";
      }
    }
  })

  return (
    <>
      <div className="container-dynamic">
        <div id="progress-container-dynamic">
          <div id="progress-bar-dynamic"></div>
        </div>
      </div>

      <div className="container-input-dynamic">  
      <label for="percentageInput1" className="pr-2 pt-1">Enter Percentage: </label>
        <input
          type="number"
          id="percentageInput-dynamic"
          min="0"
          max="100"
        />
      </div>
    </>
  )
}

export default DynamicProgressBar