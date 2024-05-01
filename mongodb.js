const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/nodejsProject")
.then(()=>{
    console.log('Connected to mongooose successfully!');
})
.catch((err)=>{
    console.log('failed', err);
})

const logInSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const loginList = new mongoose.model('login',logInSchema)

module.exports = loginList;