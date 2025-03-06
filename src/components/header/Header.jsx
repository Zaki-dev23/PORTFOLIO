import React, { useState } from 'react'
import "./header.css"
import logo from "../../images/H5.png"

export default function Header() {
  const [handleMenu, setHandleMenu] = useState(true)
  

  return (
    <div className='header'>
      <div className="header-right">
        <div className="logo-info">
          <img src={logo} className='logo' />
          <h3 className="name">
            zakaria ait laasri
          </h3>
        </div>
      </div>
      {/* <div onClick={() => setHandleMenu(!handleMenu)} className={handleMenu? "menu": ""}>
        <span className='icon-menu'>menu</span>
      </div> */}
        <div className="navbar">
          <ul className="content-lists">
            <li className="home">Home</li>
            <li className="skills">Skills</li>
            <li className="about">About</li>
            <li className="project">Project</li>
            <li className="contact">Contact</li>
          </ul>
        </div>
        <div className="header-left">
          <button className="send-message-btn">
            Send Me Message
          </button>
        </div>
    </div>
  )
}
