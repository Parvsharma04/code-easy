import React, { useState } from 'react'
import '../styles/Accordion.css'
const accordion = () => {
    const [selected,setSelected]=useState(null);
    const toggle=(i)=>{
        if(selected==i)
        {
            return setSelected(null);
        }
        setSelected(i);
    }
  return (
    <div className='wrapper'>
        <div className='accordion'>
            {data.map((item,i)=>(
                <div className="item">
                    <div className="title" onClick={()=>toggle(i)}>
                        <h2>{item.Name}</h2>
                        <span>{selected==i? '-': '+'}</span>
                    </div>
                    <div className={selected==i? 'content show': 'content'}>{item.Description}</div>
                    <div className={selected==i? 'content show': 'content'}>{item.Install}</div>
                </div>
            ))}
        </div>
      
    </div>
  )
}
const data=[
    {
        package:'1',
        Name:'ABC',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        Install:'npm i-commandname'
    },
    {
        package:'2',
        Name:'gen',
        Description: 'Lorem Ipsum i.',
        Install:'npm i-commandname'
    },
    {
        package:'1',
        Name:'ABC',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        Install:'npm i-commandname'
    },
    {
        package:'1',
        Name:'ABC',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta',
        Install:'npm i-commandname'
    }
]

export default accordion

