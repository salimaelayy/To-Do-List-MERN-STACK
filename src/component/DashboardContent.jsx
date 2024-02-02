import React from 'react'
import Single_Task from './Single_Task'

const DashboardTaskContainers = () => {
  return (
    <>
        <div className="flex flex-col h-screen">
            {/* Three Containers */}
            <div className="flex flex-row h-full">
                {/* Container 1 */}
                <div className="bg-white rounded-t-xl shadow-lg mr-4 flex-grow">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-red-400">
                        <span className="ml-2 text-white text-xl font-bold">To Do</span>
                    </div>
                    <Single_Task />
                    <Single_Task />
                </div>
                {/* Container 2 */}
                <div className="bg-white rounded-t-xl shadow-lg mr-4 flex-grow">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-yellow-400">
                        <span className="ml-2 text-white text-xl font-bold">In Progress</span>
                    </div>
                </div>
                {/* Container 3 */}
                <div className="bg-white rounded-t-xl shadow-lg mr-4 flex-grow">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-green-400">
                        <span className="ml-2 text-white text-xl font-bold">Done</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashboardTaskContainers