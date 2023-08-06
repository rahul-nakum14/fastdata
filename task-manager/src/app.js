const coonectDb = require('./db/connect');
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

app.use(express.static('public'));
const taskRouter = require('./routes/taskRouter');
app.use('/api/v1/tasks',taskRouter);

const userRouter = require('./routes/userRouter');
app.use('/api/v1/user', userRouter);


const startServer = async () =>{
    try {
        await coonectDb(process.env.MONGO_URI);
        app.listen(3000,console.log('port started at 3000'));

    } catch (error) {
        console.log(error);
    }
}

startServer()


