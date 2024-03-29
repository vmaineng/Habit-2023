// const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const {OAuth2Client, OAuth2Client} = require('google-auth-library');

//get all users
const getUsers = async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json(users);
};

//get a single user
const getUser = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.status(200).json(user);
};

//create a User
const createUser = async (req, res, next) => {
  const { username, password, firstName, lastName, email, profileImage } = req.body;

  try {
    const user = await User.create({
      username,
      password,
      firstName,
      lastName,
      email,
      profileImage,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ user });
};

//update a single user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ user });
};

const login = async (req, res, next) => {
  const {email, password} = req.body;
  User.findOne({email:email},(err,user)=>{
    if(user){
       if(password === user.password){
           res.send({message:"login sucess",user:user})
       }else{
           res.send({message:"wrong credentials"})
       }
    }else{
        res.send("not register")
    }
  })
}

//for '/login' endpoint
// const login = async (req, res, next) => {
//   const {email, password} = req.body;

//   if (!email || !password) throw new Error("Please provide an email and password");

//   const user = await User.findOne({email: email}).select('+password');

//   if (!user) throw new Error("Invalid credientials");

//   const isMatch = await user.matchPassword(password);

//   if (!isMatch) throw new Error("Invalid credentials");

  // sendTokenResponse(user, 200, res);
// }

// For '/logout' endpoint
const logout = async (req, res, next) => {
  res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000), 
      httpOnly: true
  })

  res.status(200).json({ success: true })
}


// const sendTokenResponse = (user, statusCode, res) => {
//   const token = user.getSignedJwtToken(); 

//   const options = {
//       expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 
//       httpOnly: true 
//   }

//   if (process.env.NODE_ENV === 'production') options.secure = true;

//   res
//   .status(statusCode)
//   .cookie('token', token, options)
//   .json({ success: true, token });
// } 

const googleResponse = async( req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Referrer-Policy', 'no-referrer-when-downgrade');

  const redirectUrl = 'http://localhost:4000/oauth';

  const OAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = OAuth2Client({
    access_type:'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
    prompt: 'consent'
  });

  res.json({url:authorizeUrl})
}

module.exports = { createUser, getUsers, getUser, deleteUser, updateUser, login, logout};
