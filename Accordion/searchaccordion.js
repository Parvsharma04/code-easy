document.addEventListener("DOMContentLoaded", () => {
    const data = [
      {
        package: '1',
        Name: 'Unveiling Our Vision',
        Description: 'Welcome to our digital hub! Here, we share our passion for [Your Industry/Field]. Explore our site to discover the innovation, creativity, and dedication that drive our projects and initiatives.',
      },
      {
        package: '2',
        Name: 'Crafting Excellence in Every Service',
        Description: 'Discover the array of services we offer, tailored to meet the diverse needs of our clients. Whether its [Service 1], [Service 2], or [Service 3], we are committed to delivering excellence at every step.',
      },
      {
        package: '3',
        Name: 'Powering Progress: Our Technology Arsenal',
        Description: 'Explore the cutting-edge technologies that fuel our operations. From [Technology 1] to [Technology 2], we leverage the latest tools to ensure efficiency, security, and unmatched performance.',
      },
      {
        package: '4',
        Name: 'Insights and Innovation Hub',
        Description: 'Dive into our blog for the latest industry trends, insider perspectives, and updates on our projects. Stay informed, inspired, and connected to the pulse of innovation in [Your Industry/Field].',
      },
    ];
  
    const accordionContainer = document.getElementById("accordionContainer");
    const searchInput = document.getElementById("searchInput");
  
    let selected = null;
    let filteredData = data;
  
    function renderAccordion() {
      accordionContainer.innerHTML = "";
      filteredData.forEach((item, i) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
  
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.innerHTML = `
          <h2>${item.Name}</h2>
          <span>${selected === i ? '-' : '+'}</span>
        `;
        titleDiv.addEventListener("click", () => toggle(i));
  
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        contentDiv.textContent = item.Description;
  
        if (selected === i) {
          contentDiv.classList.add("show");
        }
  
        itemDiv.appendChild(titleDiv);
        itemDiv.appendChild(contentDiv);
  
        accordionContainer.appendChild(itemDiv);
      });
    }
  
    function toggle(i) {
      selected = selected === i ? null : i;
      renderAccordion();
    }
  
    function handleSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      filteredData = data.filter(item => item.Name.toLowerCase().includes(searchTerm));
      renderAccordion();
    }
  
    function handleClearSearch() {
      searchInput.value = "";
      filteredData = data;
      selected = null;
      renderAccordion();
    }
  
    // Event listeners for search buttons
    document.getElementById("searchBtn").addEventListener("click", handleSearch);
    document.getElementById("clearBtn").addEventListener("click", handleClearSearch);
  
    renderAccordion();
  });
  