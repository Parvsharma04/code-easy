document.addEventListener('DOMContentLoaded', function () {
    const shapeDropdown = document.getElementById('shapespinnerDropdown');
    const rotation = document.getElementById('rotation')
  
    shapeDropdown.addEventListener('change', function () {
      const selectedShape = shapeDropdown.value;
    rotation.innerHTML = renderSpinners(selectedShape);
      renderSpinners(selectedShape);
    });
  
    function renderSpinners(shape) {
      switch (shape) {
        case 'circle':
          return (
            '<div class="spinner circle"></div>' +
            '<div class="spinner circle"></div>' +
            '<div class="spinner circle"></div>'
          );
        case 'square':
          return (
            '<div class="spinner square"></div>' +
            '<div class="spinner square"></div>' +
            '<div class="spinner square"></div>'
          );
        case 'triangle':
          return (
            '<div class="spinner triangle"></div>' +
            '<div class="spinner triangle"></div>' +
            '<div class="spinner triangle"></div>'
          );
        case 'rectangle':
          return (
            '<div class="spinner rectangle"></div>' +
            '<div class="spinner rectangle"></div>' +
            '<div class="spinner rectangle"></div>'
          );
        default:
          return '';
      }
    }
  });
  