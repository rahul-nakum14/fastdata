const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');

function home(req, res) {
    res.render('index');
  }
  
function registration(req, res) {
    res.render('registration');
  }
  
function login(req, res) {
    res.render('login');
  }
  
//Without Hashed
// const createdocform =  async (req,res) =>{
//   try {
//     const doc = new userModel({
//       name: req.body.name1,
//       email: req.body.email,
//       password: req.body.password,
//     })

//     await doc.save()
//     res.redirect('/login')
//   } catch (error) {
//     console.log(error);
//   }
  
// }

//With Hashed

const createdocform =  async (req,res) =>{
  const hashPassword = await bcrypt.hash(req.body.password,10);
  try {
    const doc = new userModel({
      name: req.body.name1,
      email: req.body.email,
      password: hashPassword,
    })

    await doc.save()
    res.redirect('/login')
  } catch (error) {
    console.log(error);
  }
  
}

//Without Hash Password Verify
// const verifylogin = async (req,res)=>{
//   try {
//     const {email,password} = req.body

//     const result = await userModel.findOne({email:email});
//     if(result){
//       if(result.email == email && result.password == password ){
//         res.send(`<h1>Dashboard----- ${result}</h1>`)
//       }else{
//         res.send(`<h1>Email or password is not valid</h1>`)
//       }
//     }else{
//       res.send(`<h1>User Not Found</h1>`)
//     }
  
    
//   } catch (error) {
//     console.log(error);
//   }
// }

const verifylogin = async (req,res)=>{
  try {
    const {email,password} = req.body

    const result = await userModel.findOne({email:email});
    if(result){
      const isMatch = await bcrypt.compare(password,result.password)
      if(result.email == email && isMatch ){
        res.send(`<h1>Dashboard----- ${result}</h1>`)
      }else{
        res.send(`<h1>Email or password is not valid</h1>`)
      }
    }else{
      res.send(`<h1>User Not Found</h1>`)
    }
  
    
  } catch (error) {
    console.log(error);
  }
}


module.exports = { home,registration,login,createdocform,verifylogin};
  