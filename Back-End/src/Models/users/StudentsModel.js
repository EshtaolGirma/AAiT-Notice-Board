const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true,
    }, 
    year:{
        type:Number,
        required: true,
    },
    deptId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
    },
    token:{
        type:String,
        require:true
    },
    courseId:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref :"Course",
            required:false,
        }
    ],
    courseMatId:[
        {
           type: mongoose.Schema.Types.ObjectId,
           ref :"CourseMat",
           required:false,
        }
    ],
    
    discussionId:[ 
        {
           type: mongoose.Schema.Types.ObjectId,
           ref :"Discussion",
           required:false,
        },
    ],
    

});
module.exports = mongoose.model('Student', StudentSchema);