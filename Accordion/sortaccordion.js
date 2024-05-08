document.addEventListener("DOMContentLoaded", () => {
    const data = [
      {
        package: '1',
        Name: 'Unveiling Our Vision',
        values: ['Apple', 'Orange', 'Dragon Fruit', 'Kiwi'],
      },
      {
        package: '2',
        Name: 'Crafting Excellence in Every Service',
        values: ['BMW', 'Audi', 'Maruti Suzuki', 'Kia'],
      },
      {
        package: '3',
        Name: 'Powering Progress: Our Technology Arsenal',
        values: ['Potato', 'Tomato', 'Onion', 'Capsicum'],
      },
      {
        package: '4',
        Name: 'Insights and Innovation Hub',
        values: ['guitar', 'flute', 'violin', 'piano'],
      },
    ];
  
    const accordionContainer = document.getElementById("accordionContainer");
  
    function renderAccordion() {
      accordionContainer.innerHTML = "";
      data.forEach((item, i) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
  
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.innerHTML = `
          <h2>${item.Name}</h2>
          <span>+</span>
        `;
        titleDiv.addEventListener("click", () => toggleContent(i));
  
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
  
        item.values.forEach((value, index) => {
          const valueDiv = document.createElement("div");
          valueDiv.textContent = value;
          contentDiv.appendChild(valueDiv);
        });
  
        const sortButton = document.createElement("button");
        sortButton.textContent = "Sort";
        sortButton.classList.add("sort-btn");
        sortButton.addEventListener("click", () => sortValues(i));
  
        itemDiv.appendChild(titleDiv);
        itemDiv.appendChild(contentDiv);
        itemDiv.appendChild(sortButton);
  
        accordionContainer.appendChild(itemDiv);
      });
    }
  
    function toggleContent(i) {
      const contentDiv = accordionContainer.children[i].querySelector(".content");
      contentDiv.classList.toggle("show");
    }
  
    function sortValues(i) {
      const sortedValues = [...data[i].values].sort();
      data[i].values = sortedValues;
      renderAccordion();
    }
  
    renderAccordion();
  });
  