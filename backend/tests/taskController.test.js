const Task = require('../Models/TasksModels');
const taskController = require('../Controllers/TaskController');



jest.mock('../Models/TasksModels'); // Mock Task model





describe('Task Controller Tests', () => {
  const mockTaskData = {
    title: 'Test Task',
    description: 'Testing the task controller',
    priority: 'high',
    status: 'Pending',
    createdBy: 'Tester',
    deadline: new Date(),
    comments: 'This is a test task',
    deletedAt: null,
  };

  // get all tasks
  describe('getTasks', () => {
    it('should get all tasks', async () => {
      const mockTasks = [
        { _id: 'task1', title: 'Task 1', description: 'Description 1', priority: 'low', status: 'Pending' },
        { _id: 'task2', title: 'Task 2', description: 'Description 2', priority: 'medium', status: 'In Progress' },
      ];
  
      Task.find.mockResolvedValueOnce(mockTasks);
  
      const req = {};
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      await taskController.getTasks(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockTasks);
    });
  
    // it('should handle error during getTasks', async () => {
    //   Task.find.mockRejectedValueOnce(new Error('Internal Server Error'));
  
    //   const req = {};
    //   const res = {
    //     status: jest.fn(() => res),
    //     send: jest.fn(),
    //   };
  
    //   await taskController.getTasks(req, res);
  
    //   expect(res.status).toHaveBeenCalledWith(500);
    //   expect(res.send).toHaveBeenCalledWith('Server Error');
    // });
  
    // it('should handle no tasks found during getTasks', async () => {
    //   // Mock Task.find to resolve to an empty array
    //   Task.find.mockResolvedValueOnce([]);
    
    //   const req = {};
    //   const res = {
    //     status: jest.fn(() => res),
    //     send: jest.fn(),
    //   };
    
    //   await taskController.getTasks(req, res);
    
    //   expect(res.status).toHaveBeenCalledWith(404);
    //   expect(res.send).toHaveBeenCalledWith({ message: 'Not Found' });
    // });
    
  });
  // get one Tasks
  describe('getOneTasks', () => {
    it('should get one task by ID', async () => {
      Task.findById = jest.fn().mockResolvedValue(mockTaskData);

      const req = { params: { id: 'mockTaskId' } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await taskController.getOneTasks(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockTaskData);
    });

    it('should handle task not found during getOneTasks', async () => {
      Task.findById = jest.fn().mockResolvedValue(null);

      const req = { params: { id: 'nonExistentTaskId' } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await taskController.getOneTasks(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Task not found' });
    });

    it('should handle server error during getOneTasks', async () => {
      Task.findById = jest.fn().mockRejectedValue(new Error('Internal Server Error'));

      const req = { params: { id: 'mockTaskId' } };
      const res = {
        status: jest.fn(() => res),
        send: jest.fn(),
      };

      await taskController.getOneTasks(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Internal Server Error');
    });
  });

  // Add new Tasks
  describe('addNewTask', () => {
    it('should add a new task', async () => {
      Task.create = jest.fn().mockResolvedValue(mockTaskData);

      const req = {
        body: {
          title: 'Test Task',
          description: 'Testing the task controller',
          priority: 'high',
          status: 'Pending',
          createdBy: 'Tester',
          deadline: new Date(),
          comments: 'This is a test task',
          deletedAt: null,
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await taskController.addNewTask(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ task: mockTaskData });
    });

    it('should handle server error during addNewTask', async () => {
      Task.create = jest.fn().mockRejectedValue(new Error('Internal Server Error'));

      const req = {
        body: {
          title: 'Test Task',
          description: 'Testing the task controller',
          priority: 'high',
          status: 'Pending',
          createdBy: 'Tester',
          deadline: new Date(),
          comments: 'This is a test task',
          deletedAt: null,
        },
      };
      const res = {
        status: jest.fn(() => res),
        send: jest.fn(),
      };

      await taskController.addNewTask(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Internal Server Error');
    });
  });

  // Update Tasks

  it('should update a task', async () => {
    // Mock data for an existing task
    const existingTask = { _id: 'mockTaskId', title: 'Mock Task', /* other fields */ };
    
    // Mock data for the updated task
    const updatedTaskData = { title: 'Updated Task', /* other fields */ };

    // Mock request parameters
    const req = {
      params: { id: 'mockTaskId' },
      body: updatedTaskData,
    };

    // Mock response object
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Mock the findById and save methods of Task model
    Task.findById.mockResolvedValueOnce(existingTask);
    existingTask.save = jest.fn().mockResolvedValueOnce(existingTask);

    // Execute the updateTask function
    await taskController.updateTask(req, res);

    // Perform assertions based on your implementation
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task updated successfully', task: existingTask });
  });



  // Delete Tasks
  describe('deleteTask', () => {
    it('should soft delete a task', async () => {
      // Mock necessary methods and data
      Task.findOneAndUpdate = jest.fn().mockResolvedValue(mockTaskData);

      const req = { params: { id: 'mockTaskId' } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      // Call the deleteTask method
      await taskController.deleteTask(req, res);

      // Perform assertions based on your implementation
      expect(res.json).toHaveBeenCalledWith(mockTaskData);
    });

    it('should handle task not found or already soft-deleted during deleteTask', async () => {
      Task.findOneAndUpdate = jest.fn().mockResolvedValue(null);

      const req = { params: { id: 'nonExistentTaskId' } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await taskController.deleteTask(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Document not found or already soft-deleted' });
    });

    // Add more tests for other scenarios
  });
});
