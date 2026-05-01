const User = require('../model/user')


exports.registerUser = async (req,res,next) => {
    const {name,email,password} = req.body

    const user = await User.create({
        name,email,password,
        avater: {
            public_id:'this is a simple id',
            url: 'https://res.cloudinary.com/dkfl8lq9p/image/upload/v1634567890/default_avatar_q5v8z9.png'
        }  
    });

    res.status(201).json({
        success:true,
        user,
        token:user.getJwtToken()

    });
}

exports.loginUser = async (req,res,next) => {
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            success:false,
            messege:'please enter email and password'
        })
    }

    const user = await User.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({
            success:false,
            messege:'invalid email or password'
        })
    }

    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return res.status(401).json({
            success:false,
            messege:'invalid email or password'
        })
    }

    res.status(200).json({
        success:true,
        user,
        token:user.getJwtToken()
    })
}   