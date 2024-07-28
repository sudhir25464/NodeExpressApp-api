const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./DB/connection')
// middleware use for json object 
// app.use(bodyParser.json());
app.use(express.json());
//port 
const PORT = process.env.PORT || 3000;

// DB CONNECT
connectDB();
// EXPORT PERSION MODEL
const Person = require('./model/person');
const useRouter = require('./router/router');

app.use('/api/v4', useRouter);


app.get('/', (req,res)=>{
    res.send("welcome to your first APP");
})
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})