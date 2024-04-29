const express = require('express');
const path=require('path');
const app = express();
app.use(express.static(path.join(__dirname)));


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






// app.use((req,res)=>{
//     res.status(404);
//     res.send(<h1> ERROR 404 PAGE NOT FOUND<h1>);
// });

app.listen(9005, ()=>{
    console.log('listening on port 9005');
});