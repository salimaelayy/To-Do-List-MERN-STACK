<<<<<<< HEAD
const Taskes =require ("../Models/TaskRouter")

const handleErrors =()=>{
    
}


module.exports.signup_user = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const task = await Taskes.create({ email, password });
      res.status(201).json({ task });
    }
    catch(err) {
       console.error(err);
     
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
   
  }
=======
const Task =require ("../Models/TasksModels");





module.exports.getTasks = async (req, res) => {

    try {

        const task = await Task.find()

        console.log(!task) ;

        if(!task){

            res.status(404).send({message:'Not Found '});

        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);

        res.status(500).send('Server Error ');
        
    }
}

   
module.exports.getOneTasks = async (req, res) =>  {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({ message: 'Recipe not found' });
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
    const { title, description, priority, status, deletedAt, createdBy, deadline, comments } = req.body;

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update task information based on the request body
        task.title = title || task.title;
        task.description = description || task.description;
        task.priority = priority || task.priority;
        task.status = status || task.status;
        task.deletedAt = deletedAt || task.deletedAt;
        task.createdBy = createdBy || task.createdBy;
        task.deadline = deadline || task.deadline;
        task.comments = comments || task.comments;

        // Save the updated task
        const updatedTask = await task.save();

        res.json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

  
  module.exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const task = await Task.findById(taskId);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // If the task exists, you can now delete it
      await task.deleteOne();
  
      res.json({ message: `Task ${task.titre} is deleted successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };
  
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

>>>>>>> cca716ebb48a7131cb6102a666c92857ab6cd542
