const Taskes =require ("../Models/TaskRouter")

const handleErrors =()=>{
    
}


module.exports.signup_user = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const task = await Taskes.create({ email, password });
      res.status(201).json({ task });
    }
    catch(err) {
       console.error(err);
     
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
   
  }