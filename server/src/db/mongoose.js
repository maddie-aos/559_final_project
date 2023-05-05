const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://madelinesmith:Eg7GGyEXXgVr7InU@evoting.tazyufz.mongodb.net/',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})