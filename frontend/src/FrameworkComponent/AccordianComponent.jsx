import React, {useState} from "react";
import "./AccordianComponent.css";

const AccordianComponent = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion-container">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.Name}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.Description}
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.Install}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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

export default AccordianComponent;
