const mongoose = require('mongoose')

const conn = mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}) 
.then(() =>{
    console.log('Connected to database')
})
.catch((err)=>{
    
})