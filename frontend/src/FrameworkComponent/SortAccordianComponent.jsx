import React, { useState } from 'react';
import './SortaccordianComponent.css';

const SortaccordianComponent = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const sortValues = (i) => {
    const sortedValues = [...data[i].values].sort();
    const newData = [...data];
    newData[i].values = sortedValues;
    setData(newData);
  };

  const [data, setData] = useState([
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
  ]);

  return (
    <div className='wrapper'>
      <div className='accordion-container'>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.Name}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.values.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
            <button className='sort-btn' onClick={() => sortValues(i)}>Sort</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortaccordianComponent;