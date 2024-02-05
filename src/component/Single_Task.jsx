import React,{ useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddTask from './AddTask';
import ReadEditTask from './ReadEditTask';


const Single_Task = ({ task, onDelete }) => {
    
    const [showEditComponent, setShowEditComponent] = useState(false);
    const handleDeleteClick = () => {
        onDelete(); 
    };
    const OpenEditTask = () => {
      setShowEditComponent(true);
    };
    const CloseEditTask = () => {
        setShowEditComponent(false);
      };
    return (
        <div className="max-w-xs mx-auto shadow-lg rounded-xl p-4 m-2 bg-white">{task.id}
            <a href="#"  className="block w-full">
                <div>
                    <p className="text-gray-400 font-mono text-xs mb-2">Created By: {task.createdBy}</p>
                    <p className="text-gray-800 text-2xl font-medium mb-2">{task.title}</p>
                    <p className="text-gray-800 text-l mb-4">Description: {task.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div>
                        <p className="text-gray-400 font-thin text-sm mb-2">Deadline: {task.deadline}</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-blue-500 cursor-pointer mr-2" onClick={OpenEditTask}><FaEdit /></span>
                        <span className="text-red-500 cursor-pointer" onClick={handleDeleteClick}><FaTrash /></span>
                    </div>
                </div>
            </a>
            {showEditComponent && (
                    <ReadEditTask task={task} onClickEdit={OpenEditTask}  CloseEditTask={CloseEditTask} />

                )} 
        </div>
    );
};

export default Single_Task;

