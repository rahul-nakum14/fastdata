const taskModel = require('../models/task');

const allTasks = async (req, res) => {
  try {
    const allTasks = await taskModel.find({});
    res.status(200).json({ tasks: allTasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;

  const newTask = new taskModel({
    name: name,
    completed: completed,
  });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findByIdAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    } else {
      res.status(200).json({ msg: 'Task Deleted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findByIdAndUpdate(
      { _id: taskID },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    res.status(200).json({ task });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ errors: errorMessages });
    }

    console.error(error);
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

module.exports = {
  allTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
