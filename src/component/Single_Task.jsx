import React from 'react'

const Single_Task = () => {
  return (
    <><form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input type="text" name="createdBy" value={formData.createdBy} onChange={handleChange} />
            <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form></>
  )
}
export default Single_Task