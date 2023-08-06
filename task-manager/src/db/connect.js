const { default: mongoose } = require("mongoose")

const coonectDb = (url) =>{
    return mongoose.connect(url)
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = coonectDb;