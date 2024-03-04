import React, {useEffect, useState} from "react";
import "../styles/Sidebar.css";
import {Resizable} from "react-resizable"
import "react-resizable/css/styles.css";

export const Sidebar = () => {
  const [size, setSize] = useState({ width: 350, height: 200 });

  const onResize = (event, { size }) => { 
    setSize(size);
  };

  useEffect( () => {
    let resizableTool = document.querySelector("span");
    resizableTool.style.height = "570px";
    resizableTool.style.bottom = "-54vh";
  }, [])

  return (
      <Resizable height={size.height} width={size.width} onResize={onResize}>
        <div className="box " style={{ width: size.width + 'px', height: size.height + 'px' }}>
        <div className="w-auto bg-gray-50 border-r border-gray-200 sidebar ">
            <div className="mb-10 mt-10 flex justify-center items-center">
                <input type="text" className="rounded" placeholder="Quick Search" />
                <button className="btn">Search</button>
            </div>
    
            <div className="mb-10 text-lg">
              <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                Components
              </h3>
    
              <a
                href="/framework/navbar"
                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
              >
                Navbar
              </a>
              <a
                href="/framework/form"
                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
              >
                Form
              </a>
              <a
                href="/framework/accordian"
                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
              >
                Accordian
              </a>
              <a
                href="/framework/progressBar"
                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
              >
                Progress bar
              </a>
              <a
                href="/framework/spinners"
                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
              >
                Spinners
              </a>
            </div>
        </div>
        </div>
      </Resizable>
  );
};

