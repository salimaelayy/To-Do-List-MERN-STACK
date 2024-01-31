//models/main
const  mongoose  = require("mongoose")

// create model for the database table  recipe schema .


const TasksSchema = new mongoose.Schema({
    Titre : {
        type : String,
        required : true
    },
    description : {
        type: String,
        required : true

        
    },
    Priorité: {
        type: String, 
        required : true
    },
    Statut: {
        type: String,
        required : true

    },
    Supprimé_à: {
        type: String, 
        required : true

       
    },
    Créé_par: {
        type: String, 
        required : true

       
    },
    deadline: {
        type: String, 
        required : true

       
    },
    Commentaires: {
        type: String, 

    },
    
    

})
const Task = mongoose.model("Task",TasksSchema) //creer mongoose model  collection

module.exports=Task;

