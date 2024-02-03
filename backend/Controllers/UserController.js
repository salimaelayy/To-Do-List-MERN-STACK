const userModel=require('../Models/UserModels')
const bcrypt = require('bcrypt');


const { createToken } = require('../Middlewares/tokenCreation')

const register= async(req,res,next)=> 
{
    console.log('Handling registration request');

    //get input from user
    const {username,password,email}=req.body
    console.log('Received username:', username);
  console.log('Received password:', password);
  console.log('Received email:', email);
    
    try {
        //hash password
        const hashPass=await bcrypt.hash(password,10)
        
        //verify if user exists in the db
        const existingUser=await userModel.findOne({$or:[{username},{email}],})

        //if the user exists send a response status of 400 to server 
        if(existingUser)
        {
            console.log("user already exists in db")
            return res.status(400).json({message:"username or email already exists"})
        }
        //create user
        const newUser=await userModel.create({
            username:username,
            password:hashPass,
            email:email
        })
        res.status(200).json({
            data: newUser,
            message: 'New user added successfully',
          })

    } catch (error) {
        console.log("error:",error)
        return res.status(400).json({error:error.message,message:"error creating a user"})
    }



}
// const login = async(req,res,next) =>
// {
//     try {
//         const { username, password } = req.body;
    
//         console.log("Received username:", username);
//         console.log("Received password:", password);
//         // Testing if user exists
//         const userLoggedIn = await userModel.findOne({ username });
//         const id = userLoggedIn._id;

//         // console.log("User found in database:", userLoggedIn);
    
//         if (!userLoggedIn) {
//             console.log("User doesn't exist");
//             return res.status(404).json({ message: "Username not found" });
//         }
    
//         // Ensure dbPassword is defined after userLoggedIn is retrieved
//         const dbPassword = userLoggedIn.password;
    
//         // Check if passwords are valid and not empty
//         if (!password || !dbPassword) {
//             return res.status(400).json({ error: "Username or password is invalid" });
//         }
    
//         // Compare the passwords
//         const match = await bcrypt.compare(password, dbPassword);
    
//         // If the passwords don't match
//         if (!match) {
//             return res.status(400).json({ message: "Username or password are incorrect" });
//         }
    
//         // Creating the access token
//         const accessToken = createToken(userLoggedIn);  
    
//         // Putting the token in a cookie
//         res.cookie("access-token", accessToken, { maxAge: 90000, httpOnly: true });
    
//         // Send a success response
//         return res.json({ accessToken , id});
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ error: error.message, message: "Error during login" });
//     }

    
   
// }
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        console.log("Received username:", username);
        console.log("Received password:", password);

        // Testing if user exists
        const userLoggedIn = await userModel.findOne({ username });
        console.log("User found in database:", userLoggedIn);

        if (!userLoggedIn) {
            console.log("User doesn't exist");
            return res.status(404).json({ message: "Username not found" });
        }

        // Ensure dbPassword is defined after userLoggedIn is retrieved
        const dbPassword = userLoggedIn.password;

        // Check if passwords are valid and not empty
        if (!password || !dbPassword) {
            return res.status(400).json({ error: "Username or password is invalid" });
        }

        // Compare the passwords
        const match = await bcrypt.compare(password, dbPassword);

        // If the passwords don't match
        if (!match) {
            return res.status(400).json({ message: "Username or password are incorrect" });
        }

        // Creating the access token
        const accessToken = createToken(userLoggedIn);

        // Putting the token in a cookie
        res.cookie("access-token", accessToken, { maxAge: 90000, httpOnly: true });

        // Send a success response
        return res.json({ accessToken, id: userLoggedIn._id });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: error.message, message: "Error during login" });
    }
}


  
const profile= async(req,res,next)=>
{
    res.json('profile')
    console.log('you are in the profile')
}
const logout= async(req,res)=>
{
    res.clearCookie('access-token').send('Logout successful');
}



module.exports={login,register,logout,profile}