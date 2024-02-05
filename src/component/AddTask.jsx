import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const AddTask = ({onClose}) => {
  
    const [taskData,setTaskData]=useState({
        title: '',
        description: '',
        priority: '',
        status: '',
        createdBy: '',
        deadline: '',
        comments: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("data:"+taskData)
          const response = await fetch('http://localhost:3000/tasks/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
          });
          
          setTaskData({ ...taskData, title: '', description: '', priority: '', status: '', createdBy: '', deadline: '', comments: '' });
          console.log('Task added:', response.data);
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };
   
      
  return (<>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
        <div className="bg-white p-8 rounded-lg shadow-md w-128 h-full  mt-20 mb-20">
        <button className="float-right text-gray-600 hover:text-gray-800" >
            <IoMdClose className='text-blue-600' onClick={onClose}/> 
        </button>
        <h1 className="text-xl text-gray-600 font-bold mb-4">Add Task</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
        
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={taskData.title}
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md"
                placeholder="Enter title" 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={taskData.description}
                id="description"
                rows="3"
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md resize-none"
                placeholder="Enter description" 
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          {/* Add more pairs of inputs in similar flex containers */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={taskData.priority}
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md" 
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={taskData.status}
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md" 
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
          {/* Add more pairs of inputs in similar flex containers */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">
                Created By
              </label>
              <input
                type="text"
                name="createdBy"
                value={taskData.createdBy}
                id="createdBy"
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md"
                placeholder="Enter creator" 
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={taskData.deadline}
                id="deadline"
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md" 
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Add more pairs of inputs in similar flex containers */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                value={taskData.comments}
                id="comments"
                rows="3"
                className="border-gray-300 rounded-md py-2 px-3 w-full shadow-md resize-none"
                placeholder="Enter comments"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddTask;
