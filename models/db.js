const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Student', {useNewUrlParser: true,useUnifiedTopology:true}, (err) => {
    if (!err){console.log('DAtabase Connect Succesfully');}
    else
    console.log('Probelem occcured'+err);
})
require('./student.model');
console.log("Success");