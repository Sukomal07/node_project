const mongoose = require('mongoose')
//creating a database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/nodeProject")
.then(()=>{
    console.log("Connection successful")
}).catch((error)=>{
    console.log(error)
})
