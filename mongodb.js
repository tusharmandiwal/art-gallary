
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://tusharmandiwal:Tushar%40123@credentials.ysqmbgo.mongodb.net/?retryWrites=true&w=majority&appName=credentials")
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