import React, { useEffect, useState } from 'react';
import Single_Task from '../component/Single_Task';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
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

        fetchTasks();
    }, []); // Make sure to run fetchTasks when the component mounts

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            {tasks.map(task => (
                    <div key={task._id} className="flex items-center">
                        <Single_Task task={task} />
                    </div>
            ))}
        </div>
    );
};

export default HomePage;
