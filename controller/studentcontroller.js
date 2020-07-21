const express=require('express');
const Student=require('../models/student.model');

// var app=express();
var router=express.Router();

//first page
router.get('/',(req,res)=>{
    res.render('./student/index');
});


//form of adding a student
router.get('/addStudent',(req,res)=>{
    res.render('./student/add');
});

//adding a Student
router.post('/add',(req,res)=>{
    // (err)=>{if(err){console.log("error:"+err);}}
    let student=new Student({
        Name:req.body.name,
        Fname:req.body.fname,
        Email:req.body.email,
        Password:req.body.password,
        Mobile:req.body.mobile
    });
    student.save((err,data)=>{
        if(err) throw err;
        console.log('data saved Succesfully');
        res.redirect('/student/addStudent');
    });
    console.log("Kya krta hai");
    // if(req.body.password === req.body.repassword){
    //     student.save((err,data)=>{
    //         if(err) throw err;
    //         console.log('data saved successfully');
    //         res.redirect('/addStudent');
    //     })
    // }
    // else
    //     console.log("it Failed");
});

router.get('/displayStudent',(req,res)=>{
    Student.find((err,data)=>{
        if(!err){
            res.render('./student/find',{list:data});
        }
    })
});
router.get('/updateStudent',(req,res)=>{
    Student.find((err,data)=>{
        if(!err){
            res.render('./student/find',{list:data});
        }
    })  
});
router.get('/:id',(req,res)=>{
    Student.findById(req.params.id,(err,data)=>{
    if(!err) res.render('./student/update',{list:data});
    })
});
router.post('/update/:id',(req,res)=>{
    console.log("chala"+JSON.stringify(req.body));
    Student.findOneAndUpdate({_id:req.params.id},req.body,(err,data)=>{
        if(!err) {
            console.log("DAta Saved");
            // res.redirect('/student/find');
            // Student.find((err,data)=>{
            //     if(!err){
            //         res.render('./student/find',{list:data});
            //     }
            // })
            res.redirect('/student');
        }
    });
});
router.get('/deleteStudent',(req,res)=>{
    Student.find((err,data)=>{
        if(!err){
            res.render('./student/find'),{list:data};
        }
    })
})
router.get('/delete/:id',(req,res)=>{
    Student.findByIdAndRemove({_id:req.params.id},(err,data)=>{
        if(!err){
            res.redirect('/student');
        }
    });
    
});
module.exports = router;
