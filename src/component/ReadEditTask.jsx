import moment from 'moment/moment'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const ReadEditTask = ({task,CloseEditTask }) => {

    const [focused, setFocused] = useState(null);
    const formattedDate = moment(task.deadline).format('YYYY-MM-DD')
    const [taskData,setTaskData]=useState({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        createdBy: task.createdBy,
        deadline: formattedDate,
        comments:task.comments
    })
    
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
      };
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await fetch(`http://localhost:3000/tasks/${task._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });
    
            if (response.ok) {
                console.log('Task updated successfully');
                CloseEditTask(); 
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };
    
  return (
    <> <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
    <div className="bg-white p-8 rounded-lg shadow-md w-128 h-5/6  mt-20 mb-20">
    <button className="float-right text-gray-600 hover:text-gray-800" onClick={CloseEditTask}>
        <IoMdClose className='text-blue-600' /> 
    </button>

    <h1 className="text-xl text-gray-600 font-bold mb-4">Edit Task</h1>
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleChange}
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none rounded-md"
                placeholder="Task Title"
                onFocus={() => setFocused('title')}
                onBlur={() => setFocused(null)}
            />
            <textarea
                name="description"
                value={taskData.description}
                onChange={handleChange}
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none resize-none rounded-md"
                placeholder="Task Description"
                 onFocus={() => setFocused('description')}
                        onBlur={() => setFocused(null)}
            ></textarea>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <input
                        type="text"
                        name="priority"
                        value={taskData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Priority"
                         onFocus={() => setFocused('priority')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <input
                        type="text"
                        name="status"
                        value={taskData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Status"
                         onFocus={() => setFocused('status')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
                <div>
                    <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">Created By</label>
                    <input
                        type="text"
                        name="createdBy"
                        value={taskData.createdBy}
                        onChange={handleChange}
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Created By"
                         onFocus={() => setFocused('createdBy')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
                <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={taskData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                         onFocus={() => setFocused('deadline')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
            </div>
            <textarea
                name="comments"
                value={taskData.comments}
                onChange={handleChange}
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none resize-none rounded-md"
                placeholder="Comments"
                 onFocus={() => setFocused('Comments')}
                        onBlur={() => setFocused(null)}
            ></textarea>
            <div className="flex justify-end">
                <button
                    onClick= {handleSubmit}
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Save
                </button>
                
            </div>
    </form>
  </div>
</div>
    
  
    </>
  )
}

export default ReadEditTask