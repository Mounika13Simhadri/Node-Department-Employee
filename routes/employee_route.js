const express=require('express');
const mysql=require('mysql');
const erouter=express();
const{etable,einsert,elist,eupdate,edelete}=require('../controllers/employee_controller')


erouter.post('/insertvalue/:id',einsert);
erouter.get('/list',elist);
erouter.get('/list/:id',elist);
erouter.put('/update/:id',eupdate);
erouter.delete('/delete/:id',edelete);


module.exports=erouter;