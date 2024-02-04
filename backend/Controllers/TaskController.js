const Task =require ("../Models/TasksModels");


module.exports.getTasks = async (req, res) => {

    try {

        const task = await Task.find()

        // console.log(!task) ;

        if(!task){

            res.status(404).send({message:'Not Found'});

        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);

        res.status(500).send('Server Error');
        
    }
}

   
module.exports.getOneTasks = async (req, res) =>  {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports.addNewTask = async (req, res) => {
    console.log('addNewTask ');

    const { title, description, priority, status, deletedAt, createdBy, deadline, comments } = req.body; //destr

    try {
        const newTask = await Task.create({
            title,
            description,
            priority,
            status,
            deletedAt,
            createdBy,
            deadline,
            comments
        });
        res.status(201).json({ task: newTask });
        console.log('Request Body:', req.body);

    } catch (error) {
        console.error(error);
        console.error('Error adding new task:', error);

        res.status(500).send('Internal Server Error');
    }
};
module.exports.updateTask = async (req, res) => {
    const taskId = req.params.id;

    try {
        // if (!Object.keys(req.body).length) {
        //     return res.status(400).json({ message: 'Request body is empty' });
        // }
        if (!req.body) {
            // If req.body is undefined or falsy, handle the error
            return res.status(400).json({ message: 'Request body is missing' });
        }

        const { title, description, priority, status, deletedAt, createdBy, deadline, comments } = req.body;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update task information based on the request body
        task.title = title !== undefined ? title : task.title;
        task.description = description !== undefined ? description : task.description;
        task.priority = priority !== undefined ? priority : task.priority;
        task.status = status !== undefined ? status : task.status;
        task.deletedAt = deletedAt !== undefined ? deletedAt : task.deletedAt;
        task.createdBy = createdBy !== undefined ? createdBy : task.createdBy;
        task.deadline = deadline !== undefined ? deadline : task.deadline;
        task.comments = comments !== undefined ? comments : task.comments;

        // Save the updated task
        const updatedTask = await task.save();

        return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

  
module.exports.deleteTask = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a parameter in the request
    
    try {
        console.log('Deleting task with ID:', id);

      const updatedDocument = await Task.findOneAndUpdate(
        { _id: id, deletedAt: null }, // Find the document by ID and ensure it's not already soft-deleted
        { $set: { deletedAt: new Date() } }, // Set the deletedAt field to the current date
        { new: true } // Return the updated document
      );
  
      if (!updatedDocument) {
        return res.status(404).json({ message: 'Document not found or already soft-deleted' });
      }
  
      return res.json(updatedDocument);
    } catch (error) {
      console.error('Error during soft delete:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };


    // const taskId = req.params.id;
  
    // try {
    //   const task = await Task.findById(taskId);
  
    //   if (!task) {
    //     return res.status(404).json({ message: 'Task not found' });
    //   }
  
    //   // If the task exists, you can now delete it
    //   await task.deleteOne();
  
    //   res.json({ message: `Task ${task.titre} is deleted successfully` });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'Internal Server Error', error: error.message });
    // }
//   };
  
  module.exports.getTaskByTitle = async (req, res) => {
    const taskName = req.query.title;

    try {
        const tasks = await Task.find({ title: taskName });

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found with the given name' });
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

