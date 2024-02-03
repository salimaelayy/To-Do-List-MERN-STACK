import React, { useState, useEffect } from 'react';
import Single_Task from './Single_Task';
import '../index.css'; 

const DashboardTaskContainers = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/tasks/');
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await response.json();
                setTasks(data); 
                console.log(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row h-screen">
                <div className="container bg-white rounded-t-xl shadow-lg mr-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-red-400">
                        <span className="ml-2 text-white text-xl font-bold">To Do</span>
                    </div>
                    {tasks.map(task => (
                        <Single_Task key={task.id} task={task} />
                    ))}
                    
                </div>
                <div className="container bg-white rounded-t-xl shadow-lg mr-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-yellow-400">
                        <span className="ml-2 text-white text-xl font-bold">In Progress</span>
                    </div>
                </div>
                <div className="container bg-white rounded-t-xl shadow-lg mr-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-green-400">
                        <span className="ml-2 text-white text-xl font-bold">Done</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTaskContainers;
