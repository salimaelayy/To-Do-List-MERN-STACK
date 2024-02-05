import React from 'react';
import DashboardTaskContainers from '../component/DashboardContent';
import DashboardSideBar from '../component/DashboardSideBar';

const DashboardTask = () => {
  return (
    <div className="flex bg-gray-100 text-gray-900 h-lvh ">
      {/* Sidebar */}
      <DashboardSideBar />
      {/* Dashboard */}
      <div className="flex flex-col flex-grow m-5">
        <DashboardTaskContainers />
      </div>
    </div>
  );
};

export default DashboardTask;
