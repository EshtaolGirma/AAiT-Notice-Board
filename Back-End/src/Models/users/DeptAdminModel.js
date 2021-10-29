const mongoose=require('mongoose');

const DeptAdminSchema=mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    deptId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: false,
    },
    
});


module.exports = mongoose.model('DeptAdmin', DeptAdminSchema);