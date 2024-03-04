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