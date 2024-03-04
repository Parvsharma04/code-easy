import React, { useEffect } from "react";
import './DynamicProgressBar.css';
import '../styles/ProgressBarDocs.css'

const DynamicProgressBar = ()=> {
  useEffect(()=>{
    document.getElementById('percentageInput1').addEventListener('input', () => {
      let val = document.getElementById('percentageInput1').value;
      updateProgressBar(val);
    })
  
    function updateProgressBar(value) {
      const progressBar = document.getElementById('progress-bar');
      const progress = document.getElementById('progress-container');
      progressBar.style.width = value + '%';
      if (value < 30) {
        progressBar.style.backgroundColor = "red";
        progress.style.borderColor = "red";
      } else if (value >= 30 && value < 60) {
        progressBar.style.backgroundColor = "orange";
        progress.style.borderColor = "orange";
      } else if (value >= 60 && value <= 80) {
        progressBar.style.backgroundColor = "#3d7ae3";
        progress.style.borderColor = "#3d7ae3";
      } else if (value >= 80 && value <= 90) {
        progressBar.style.backgroundColor = "blue";
        progress.style.borderColor = "blue";
      } else {
        progressBar.style.backgroundColor = "green";
        progress.style.borderColor = "green";
      }
    }
  })

  return (
    <>
      <div className="container">
        <div id="progress-container">
          <div id="progress-bar"></div>
        </div>
      </div>

      <div className="container2">  
      <label for="percentageInput1" className="pr-2 pt-1">Enter Percentage: </label>
        <input
          type="number"
          id="percentageInput1"
          min="0"
          max="100"
        />
      </div>
    </>
  )
}

export default DynamicProgressBar