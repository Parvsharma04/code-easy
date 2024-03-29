import React from 'react'
import '../styles/Popover2.css'
const Popover2 = () => {
  return (
    <div>
      <main>
        <div>
          <span tooltip="I'm up above it!">Up</span>
        </div>
        <div>
          <span tooltip="Slide to the left" flow="left">Left</span>
          <span tooltip="Slide to the right" flow="right">Right</span>
        </div>
        <div>
          <span tooltip="Get Down." flow="down">Down</span>
        </div>
      </main>
    </div>
  )
}

export default Popover2
