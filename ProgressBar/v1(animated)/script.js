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