import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const closeSidebar = () => {
    setVisible(false);
  };

  const handleMenuItemClick = (item) => {
    console.log("${item} clicked");
    closeSidebar();
  };

  return (
    <div>
      {/* Toggle button for sidebar */}
      <button className = "toggle-btn" onClick = {toggleSidebar}>
      
      </button>
      {/*Sidebar*/}
      <div className = {'sidebar${visible ? "open" : ""}'}>
        <div className = "sidebar-header">
        <h2>Gemini sidebar</h2>
        </div>
        <nav className = "sidebar-nav">
        <a href = "#" onClick = {() => handleMenuItemClick("</a>
      </nav>
      </div>
    <div className = {content${visible ? "shifted" : ""}'}>
         <h1>Welcome to the Gemini-inspired Sidebar</h1>
         <p>Resize the window to see the responsive sidebar in action!</p>
        </div>
    </div>
 );
      };

export default SideBar;
