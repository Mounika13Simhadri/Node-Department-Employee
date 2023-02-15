const express=require('express');
const PORT=5000;
const router=require('./routes')



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})