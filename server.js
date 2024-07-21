const express = require('express');
const app = express();

require('dotenv').config();

// middleware use for json object 
app.use(express.json());
//port 
const PORT = process.env.PORT || 3000;

const useRouter = require('./router/router');

app.use('/api/v4', useRouter);


app.get('/', (req,res)=>{
    res.send("welcome to your first APP");
})
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})