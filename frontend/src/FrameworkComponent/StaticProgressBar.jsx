import React, { useEffect } from "react";
import "./StaticProgressBar.css";
// import "../styles/ProgressBarDocs.css";

const StaticProgressBar = () => {
  useEffect(() => {
    document.getElementById("percentageInput3").addEventListener("input", () => {
      let val = document.getElementById("percentageInput3").value;
      updateProgressBar3(val);
    });
    function updateProgressBar3(value) {
        const progressBar = document.getElementById('progress-bar-static2');
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
  });

  return (
    <>
      <div className="container">
      <div id="progress-container">
        <div id="progress-bar-static2"></div>
      </div>
    </div>
    <div className="container2">
    <label for="percentageInput3" className="pr-2 pt-1">
          Enter Percentage:{" "}
        </label>
        <input
          type="number"
          id="percentageInput3"
          min="0"
          max="100"
        />
      </div>
    </>
  );
};

export default StaticProgressBar;
