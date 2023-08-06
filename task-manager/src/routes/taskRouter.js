const express =  require('express');
const taskRouter = express.Router();
const {allTasks,createTask,getTask,updateTask,deleteTask} =require('../controller/taskController');

taskRouter.route('/')
.get(allTasks)
.post(createTask)

taskRouter.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)

module.exports = taskRouter;