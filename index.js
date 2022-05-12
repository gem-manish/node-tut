const http=require('http');
const data = require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
const fs = require('fs');
const input = process.argv;
if(input[2]=='add'){
    console.log(input[3]);
    console.log(input[4]);
    fs.writeFileSync(input[3], input[4]);
}
else if (input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log('invalid input');
}

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath,'this is a simple text file');
fs.readFile(filePath,'utf-8',(err,item)=>{
    console.log(item);
})
fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
    if(!err){
        console.log("file is updated");
    }
})
fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
    console.log("file is renamed");
});
fs.unlinkSync(`${dirPath}/fruits.txt`);





//expressjs

const express = require('express');
const app = express();


app.get('',(req,res)=>{
    // console.log("data sent by browser",req.query);
    res.send(`
    <h1>Welcome to home page</h1>
    <a href="/about">About<a/>
    `);
});

app.get('/about',(req,res)=>{

    res.send(`
    <input type="tex<t" placeholder="User Name" value=${req.query.name}>
    <button>Click Me</button>
    <a href="/">Home<a/>
    `);
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'manish',
            email:'manish@test.com'
        },
        {
            name:'sam',
            email:'sam@test.com'
        }
    ]);
});

const pth = require('path');
const publicPath = pth.join(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));
app.get('', (__, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (__, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (__, res) => {
    res.sendFile(`${publicPath}/help.html`);
});




app.set('view engine', 'ejs');

app.get('/profile', (__, res) => {
    const user ={
        name:'manish pandey',
        email:'manish@test.com',
        city:'noida'
    }
    res.render('profile',{user});
});

app.get('*', (__, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4200);