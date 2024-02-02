import React from 'react'
import { FaUser } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const DashboardSideBar = () => {
  return (
    <>
   <aside className="flex flex-col items-center justify-between w-20 border-r border-gray-200 bg-white">
        <div className="flex flex-col items-center pt-2">
            {/* Sidebar content */}
            <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s" alt="" />
            </div>
            <nav className="flex flex-col gap-y-4 pt-10">
                <a href="#" className="group  rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <FaPlus className="w-auto h-auto mt-4 cursor-pointer text-gray-500 hover:text-gray-700" />
                    <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                        <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                            <div className="absolute inset-0 -left-1 flex items-center">
                                <div className="h-2 w-2 rotate-45 bg-white"></div>
                            </div>
                            Layouts <span className="text-gray-400">(Y)</span>
                        </div>
                    </div>
                </a>
                
            </nav>
        </div>

        <div className="flex flex-col items-center gap-y-4 pb-10">
            <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
                <svg width="24" height="24" className="h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01M12 8V12V8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button className="mt-2 rounded-full bg-gray-100">
              <FaUser />
            </button>
        </div>
    </aside>


  </>
  )
}

export default DashboardSideBar