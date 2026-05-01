const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: {
        type :String,
        required: [true,'please enter your name'],
        maxLength:[30,'your name canot exceed 30 characters']
    },
    email : {
        type:String,
        required: [true,'pleader'],
        unique:true,
        validate: [validator.isEmail,'please enter your valid mail']
    },
    password: {
        type :String,
        required: [true,'please enter your name'],
        minLength:[6,'your name canot exceed 30 characters']
    },
   avater: {
    public_id : {
       type: String,
       required: true
    },
    url : {
      type: String,
      required: true
    }
   },
   role : {
    type:String,
    default : Date.now 
   },
   createdAt : {
    type:Date,
    default:Date.now,
   },
   resetPasswordToken :String,
   resetPasswordExpire:Date

   
    
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})
//return jsonwebtoken
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    });
}
    
userSchema.methods.comparePassword = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}


module.exports = mongoose.model('User', userSchema); 