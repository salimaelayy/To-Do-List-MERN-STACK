import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Single_Task = ({ task }) => {
    return (
        <div className="shadow-lg rounded-xl p-4 m-2 bg-white">
        <a href="#" className="block w-auto">
            <div>
                <p className="text-gray-800 text-xl font-medium mb-2">
                    Another card title
                </p>
                <p className="text-blue-600 text-xs font-medium mb-2">
                    Due: Monday, 24 August
                </p>
                <p className="text-gray-400 text-sm mb-4">
                    This is another description for the card...
                </p>
            </div>
            <div className="flex items-center justify-end mt-2">
                <span className="text-blue-500 cursor-pointer mr-2">Edit</span>
                <span className="text-red-500 cursor-pointer">Delete</span>
            </div>
        </a>
    </div>
    
    
    );
};

export default Single_Task;
