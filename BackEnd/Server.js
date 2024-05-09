const express = require('express');
const mongoose=require('mongoose')

const bookRoute=require('./Routes/BookRoutes');
const userRoute=require('./Routes/UserRoutes');
const adminLoginRoute=require('./Routes/AdminLoginRoutes');
const issueBookRoute=require('./Routes/IssueBookRoutes')
const bodyparse=require('body-parser')

const path=require('path')

const app = express();
// app.use(express.json());
app.use(bodyparse.json());
//Import dotenv variable
require('dotenv').config()

const cors=require('cors')



// static folder ah maathi vdum
app.use('/upload',express.static(path.join(__dirname,'upload')))

// app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.use(cors());
app.use((req, res, next) => {
    console.log("Path" + req.path + "method" + req.method);
    next()
})
//DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log("DB connection successfully and Listening to "+process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
//Base route;
app.use('/api/books',bookRoute);
app.use('/api/users',userRoute);
app.use('/api/issueBook',issueBookRoute)

//Login

app.use('/api/admin',adminLoginRoute)


