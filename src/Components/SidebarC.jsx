import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import classNames from "classnames";
import '../Assets/style.css'


const linkStyle = "flex flex-row items-center space-x-2 cursor-pointer text-gray-200";
const hoverme = "hover:text-white hover:font-semibold";
const activeli = "text-white font-semibold";

const SidebarC = () => {
  return (
    <div className="flex flex-col justify-between w-60 p-10 bg-gray-800 text-white hideNav">
    <div>
      <h1 className="text-3xl font-bold pb-8">weather</h1>
      <nav>
          <ul className="space-y-4">
              <li className={classNames(linkStyle,hoverme,activeli)}> <MdDashboard/> <span>Dashboard</span> </li>
              <li className={classNames(linkStyle,hoverme)}><HiSpeakerphone/> <span>Weather Alert</span> </li>
              <li className={classNames(linkStyle,hoverme)}><FaRegCalendarAlt/> <span>Calendar</span> </li>
              <li className={classNames(linkStyle,hoverme)}><FaRegUserCircle/> <span>Setting</span> </li>
          </ul>
      </nav>
    </div>
    <div>
      <h4 className="cursor-pointer">Help</h4>
      <h4 className="cursor-pointer">Contact us</h4>
    </div>
  </div>
  )
}

export default SidebarC