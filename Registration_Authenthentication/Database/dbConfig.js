const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hanonymous371:A6s35aWYckJi7BbH@cluster0.qdzm9g4.mongodb.net/')
  .then(() => {
    console.log('Dbconnected');
  })
  .catch((error) => {
    console.log('Error, Something Went Wrong');
  });

