const express = require('express');
const app = express();

PORT = 4000;

app.get('/', (req,res)=>{
    res.send("welcome to your first APP");
})
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})