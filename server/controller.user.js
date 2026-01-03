const User=require("./model.user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userSignUp=async(req,res)=>{
    const {email,password}=req.body

    if (!email || !password){
        res.status(400).json({"message":"Please enter the email and password"})
    }
    let user=await User.findOne({email})
    if(user){
        return res.status(400).json({ error: "Email is already exist" })
    }

    const hashPwd=await bcrypt.hash(password,10)
    const newUser=await User.create({
        email,password:hashPwd
    }) 

    let token=jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
    return res.status(200).json({ token, user:newUser })
}


const userLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" })
    }
    let user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY)
        return res.status(200).json({ token, user })
    }
    else {
        return res.status(400).json({ error: "Invaild credientials" })
    }
}

module.exports = { userLogin, userSignUp}