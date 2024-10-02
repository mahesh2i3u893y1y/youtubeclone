// import React from 'react'
// import MenuItems from "./MenuItems"
import { Link } from "react-router-dom";

import { useSelector } from "react-redux"

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  
  return(
    <div className="text-[15px] w-36 shadow-lg p-2 shrink-0">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subsriptions</li>
      </ul>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Paylist</li>
        <li>Your Videos</li>
        <li>Liked Videos</li>
        <li>Watch Later</li>
      </ul>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcast</li>
      </ul>
    </div>
  )
}

export default Sidebar
