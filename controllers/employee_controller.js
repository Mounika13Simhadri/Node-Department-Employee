const express=require('express');
const uuid=require('uuid');
const db=require('../models/dbconnection');



const einsert=(req,res)=>{
    const did=req.params.id;
    const id=req.body.Id;
    const name=req.body.Employee_Name;
    const address=req.body.Address;
    const phone=req.body.Phone;
    const email=req.body.Email;
    const sql=`INSERT INTO employee VALUES(${id},'${name}','${address}',${phone},'${email}','${did}')`;
      db.query(sql,(err,result)=>{
        if(err)throw err;
        res.json(result)
      })
}

//Get  Values
const elist=(req,res)=>{
    let sql;
    if(req.params.id){
         sql=`SELECT * FROM employee where Id=${req.params.id}`;
    }
    else{
     sql='SELECT * FROM employee';
    }
   
    db.query(sql,(err,results)=>{
      if(err)throw err;
      res.json(results);
    })
 
}

const eupdate=(req,res)=>{
  const updateEmployee=req.body;
  Name=updateEmployee.name;
  address=updateEmployee.address;
  phone=updateEmployee.phone;
  email=updateEmployee.email;
  did=updateEmployee.did;
  let sql=`UPDATE members SET Employee_Name='${Name}',Address='${address}',Phone='${phone}',Email='${email}',Did='${did}' where Id=${req.params.id}`;
  db.query(sql,(err,results)=>{
    if(err)throw err;
    res.send(results)
  })
}

const edelete=(req,res)=>{
  let sql=`DELETE FROM employee where id=${req.params.id}`;
  db.query(sql,(err,results)=>{
    if(err){
      res.status(400).json({msg:`No employee found with the id of ${req.params.id}`});
    }
    else{
      res.json(results);
    }
    
  })
}
module.exports={einsert,elist,eupdate,edelete};

