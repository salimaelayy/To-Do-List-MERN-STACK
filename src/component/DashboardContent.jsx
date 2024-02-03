import React, { useState, useEffect } from 'react';
import Single_Task from './Single_Task';
import axios from 'axios';



import '../index.css'; 

const DashboardTaskContainers = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks/');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        // Filter out deleted tasks before updating the state
        const nonDeletedTasks = data.filter(task => task.deletedAt === null);
        setTasks(nonDeletedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    useEffect(() => {
      fetchTasks();
    }, []); // Make sure to run fetchTasks when the component mounts
  
    const handleDelete = async (taskId) => {
        console.log(taskId)
        try {
            console.log('Deleting task:', taskId);

            const response = await axios.delete(`http://localhost:3000/tasks/${taskId}`);
            console.log('Delete response:', response);



            if (response.status === 200) {
                // If the deletion is successful, update the state to reflect the changes
                const updatedTasks = tasks.filter((task) => task._id !== taskId);
                setTasks(updatedTasks);
            } else {
                console.error('Error deleting task:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting task:', error.message);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row h-screen">
                <div className="container bg-white rounded-t-xl shadow-lg mr-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="flex h-10 items-center p-10 rounded-t-xl bg-red-400">
                        <span className="ml-2 text-white text-xl font-bold">To Do</span>
                    </div>
                    {tasks.map(task => (
            <div key={task._id} className="flex items-center">
              <Single_Task task={task} onDelete={() => handleDelete(task._id)} />
            </div>
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
