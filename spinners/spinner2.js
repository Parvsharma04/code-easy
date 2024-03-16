const spinner = document.getElementById('multicolorspinner');
let rotationCount = 0;

spinner.addEventListener('animationiteration', () => {
  // Detect when one full rotation is completed
  rotationCount++;

  // Change color after every 2 rotations (adjust as needed)
  if (rotationCount % 2 === 0) {
    changeColor();
  }
});

function changeColor() {
  const colors = ['red', 'green', 'yellow', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  spinner.style.borderTopColor = randomColor;
}
