const express = require('express');
const app = express();
const userRouter = require('./Router/userRouter');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/', userRouter);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});



mongoose.connect('mongodb+srv://hanonymous371:A6s35aWYckJi7BbH@cluster0.qdzm9g4.mongodb.net/')
  .then(() => {
    console.log('Dbconnected');
  })
  .catch((error) => {
    console.log('Error, Something Went Wrong');
  });



// app.listen(3000,()=>{
//     console.log('Server Started');
// });
