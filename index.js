require('./models/db');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const app=express();
const controller=require('./controller/studentcontroller')


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('views',path.join(__dirname,'/views/'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use('/student',controller);
// app.use(express.static(path.join(__dirname,'public')));


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{console.log(`Server Started at ${PORT}`)});