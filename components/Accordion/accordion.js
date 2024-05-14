const data = [
  {
    package: "1",
    Name: "Unveiling Our Vision",
    Description:
      "Welcome to our digital hub! Here, we share our passion for [Your Industry/Field]. Explore our site to discover the innovation, creativity, and dedication that drive our projects and initiatives.",
  },
  {
    package: "2",
    Name: "Crafting Excellence in Every Service",
    Description:
      "Discover the array of services we offer, tailored to meet the diverse needs of our clients. Whether its [Service 1], [Service 2], or [Service 3], we are committed to delivering excellence at every step.",
  },
  {
    package: "3",
    Name: "Powering Progress: Our Technology Arsenal",
    Description:
      "Explore the cutting-edge technologies that fuel our operations. From [Technology 1] to [Technology 2], we leverage the latest tools to ensure efficiency, security, and unmatched performance.",
  },
  {
    package: "4",
    Name: "Insights and Innovation Hub",
    Description:
      "Dive into our blog for the latest industry trends, insider perspectives, and updates on our projects. Stay informed, inspired, and connected to the pulse of innovation in [Your Industry/Field].",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const accordionWrapper = document.getElementById("accordionWrapper");
  const accordionContainer = document.getElementById("accordionContainer");

  data.forEach((item, i) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("accordion-item");
    itemDiv.classList.add(`accordion-item-${i}`); // Unique class for each item
    itemDiv.id = `accordion-item-${i}`; // Unique ID for each item

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("accordion-title");
    titleDiv.classList.add(`accordion-title-${i}`); // Unique class for each title
    titleDiv.innerHTML = `
    <h2>${item.Name}</h2>
    <span>+</span>
  `;
    titleDiv.addEventListener("click", () => toggle(i));

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("accordion-content");
    contentDiv.classList.add(`accordion-content-${i}`); // Unique class for each content
    contentDiv.id = `accordion-content-${i}`; // Unique ID for each content
    contentDiv.textContent = item.Description;

    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(contentDiv);

    accordionContainer.appendChild(itemDiv);
  });

  accordionWrapper.appendChild(accordionContainer);
});

let selected = null;

function toggle(i) {
  const contentDivs = document.querySelectorAll(`.accordion-content`);
  contentDivs.forEach((content, index) => {
    if (i === index) {
      content.classList.toggle("show");
    } else {
      content.classList.remove("show");
    }
  });

  const titleSpans = document.querySelectorAll(`.accordion-title span`);
  titleSpans.forEach((span, index) => {
    if (i === index) {
      span.textContent = span.textContent === "+" ? "-" : "+";
    } else {
      span.textContent = "+";
    }
  });

  selected = selected === i ? null : i;
}
