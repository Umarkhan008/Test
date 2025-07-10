import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline,IoDocuments } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaCalendar,FaRegChartBar  } from "react-icons/fa";


const Comp = () => {
  return (
    <div className='w-[20%] pt-7 h-screen  bg-gray-500 text-white'>
        <ul className='list-none flex flex-col '>
          <Link to="/home">
          <li className='flex items-center w-full p-3 cursor-pointer transition-all hover:bg-gray-600'><IoHomeOutline />Dashboard</li>
          </Link>
          <Link to="/team">
          <li className='flex items-center w-full p-3 cursor-pointer transition-all hover:bg-gray-600'><RiTeamFill />Team</li>
          </Link>

          <Link to="/calendar">
          <li className='flex items-center w-full p-3 cursor-pointer transition-all hover:bg-gray-600'><FaCalendar />Calendar</li>
          </Link>
          <li className='flex items-center w-full p-3 cursor-pointer transition-all hover:bg-gray-600'><IoDocuments />Documents</li>
          <li className='flex items-center w-full p-3 cursor-pointer transition-all hover:bg-gray-600'><FaRegChartBar />Reports</li>
        </ul>
    </div>
  )
}

export default Comp