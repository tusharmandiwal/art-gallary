
const express = require('express');
const path=require('path');
const app = express();
app.use(express.static(path.join(__dirname)));


require('./mongodb');
const loginList = require('./mongodb');


app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('/Gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'Gallery', 'gallery.html'));
});
app.get('/OwnArt', (req, res) => {
    res.sendFile(path.join(__dirname, 'OwnArt', 'index.html'));
});
app.get('/Shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'Shop', 'shop.html'));
});
app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login', 'login.html'));
});
app.get('/Signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signup', 'signup.html'));
});

app.post('/Signup', async (req, res) => {
    const { email, password } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await loginList.findOne({ email });

    if (existingUser) {
        // User with this email already exists
        return res.status(400).send(`<script>alert('User with this email already exists'); window.location='/Signup';</script>`);
    }

    // If user with this email doesn't exist, create a new user
    const newUser = await loginList.create({ email, password });
    console.log('New user registered:', newUser);

    res.redirect('/Login');
})


app.post('/Login', async (req, res)=>{
    const check = await loginList.findOne({email: req.body.email})
    if(!check){
        res.send("Username or password is incorrect");
    }
    else{
        const checkPassword = await loginList.findOne({password: req.body.password})
        if(checkPassword){
            // res.send("password is correct");
            res.redirect('/');
        }
        else{
            res.send("Password is incorrect");
        }
    }
})




const port = process.env.PORT || 9005;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});