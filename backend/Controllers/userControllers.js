const asyncHandler = require ('express-async-handler');
const Consumer = require('../Models/userModels')

//register user 
const registerHandler = asyncHandler( async (req, res)=>{
    const { name, email, mobileNumber, password} = req.body
    if(!name || !email || !password || !mobileNumber){
        res.status(400).json({ message: "Field cannot be blank"});
    } 
    // validate user

    const validateUser = await Consumer.findOne({email}); 

    if(validateUser){
        res.status(406).json(`User with ${email} is already registered`)
    }
    /// create user

    const user = await Consumer.create({
        name,
        email,
        mobileNumber,
        password
    });
    if(user){
        res.status(200)
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.mobileNumber,
        });
    } else{
        res.status(403)
        throw new Error ('Forbidden');
    }
});

//login functionality 
const loginHandler = asyncHandler( async ( req, res)=>{
    const { email, mobileNumber, password} = req.body;

    // check if user exists
    const user = await  Consumer.findOne({email});
    if(user){
        res.status(200).json({
            _id : user.id,
            name: user.name,
            phone: user.mobileNumber,
            email: user.email
        })
    } else {
        res.status(403).json({ message: " forbidden"});
    }
});

const getUser = asyncHandler( async( req, res)=>{
    res.json(200).status({ message: " user info"})
})

module.exports = {
    registerHandler,
    loginHandler,
    getUser
}