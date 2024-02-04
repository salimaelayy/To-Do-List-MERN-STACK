import React from 'react'

const ReadEditTask = ({ task, onSave, onClose }) => {
    
    /*const [editedTask, setEditedTask] = useState({ ...task });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };
    
    const handleSave = () => {
        onSave(editedTask);
    };
    
    const handleCancel = () => {
        onCancel();
    };*/
  return (
    <> 
        <div className="task-editor w-full p-4 bg-white shadow-md rounded-lg">
            <input
                type="text"
                name="title"
                value=""
                onChange=""
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none rounded-md"
                placeholder="Task Title"
            />
            <textarea
                name="description"
                value=""
                onChange=""
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none resize-none rounded-md"
                placeholder="Task Description"
            ></textarea>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <input
                        type="text"
                        name="priority"
                        value=""
                        onChange=""
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Priority"
                    />
                </div>
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <input
                        type="text"
                        name="status"
                        value=""
                        onChange=""
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Status"
                    />
                </div>
                <div>
                    <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">Created By</label>
                    <input
                        type="text"
                        name="createdBy"
                        value=""
                        onChange=""
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                        placeholder="Created By"
                    />
                </div>
                <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value=""
                        onChange=""
                        className="w-full px-4 py-2 shadow-md focus:outline-none rounded-md"
                    />
                </div>
            </div>
            <textarea
                name="comments"
                value=""
                onChange=""
                className="block w-full mb-4 px-4 py-2 shadow-md focus:outline-none resize-none rounded-md"
                placeholder="Comments"
            ></textarea>
            <div className="flex justify-end">
                <button
                    onClick=""
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Save
                </button>
                <button
                    onClick=""
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                    Cancel
                </button>
            </div>
        </div>
  
    </>
  )
}

export default ReadEditTask