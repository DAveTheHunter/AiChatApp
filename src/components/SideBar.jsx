import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets.js'
const SideBar = () => {
  const [visible, setVisible] = useState(true);  
 
  return (
    <div className = "main">
    <img src={assets.menu}>

    </div>
  )
}

export default SideBar; 
