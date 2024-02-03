import React,{ useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';


const Single_Task = ({ task, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(); // Call the onDelete callback to trigger the deletion
    };
    return (
        <div className="max-w-xs mx-auto shadow-lg rounded-xl p-4 m-2 bg-white">
            <a href="#" className="block w-full">
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
                        <span className="text-blue-500 cursor-pointer mr-2"><FaEdit /></span>
                        <span className="text-red-500 cursor-pointer" onClick={handleDeleteClick}><FaTrash /></span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Single_Task;

