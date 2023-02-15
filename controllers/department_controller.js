const express=require('express');
const uuid=require('uuid');
const db=require('../models/dbconnection');

// const{insertDepartment}=require('../services/data')


// async function dinsert(req, res) {
//     try {
//         res.json(await insertDepartment(req));
//     } catch (err) {
//         console.error(err.message);
//     }
//   }
const dinsert=(req,res)=>{
    const id=req.body.Id;
    const name=req.body.Department_Name;
    const location=req.body.Location;
    const sql=`INSERT INTO department VALUES('${id}','${name}','${location}')`;
      db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            throw err;}
        res.json(result)
      })
}
//Get  Values
const dlist=(req,res)=>{
    let sql;
    if(req.params.id){
        sql=`SELECT * FROM department where Id=${req.params.id}`;
   }
   else{
    sql='SELECT * FROM department';
   }
    db.query(sql,(err,results)=>{
      if(err)throw err;
      res.json(results);
    })
}


const dupdate=(req,res)=>{
    const updateDepartment=req.body;
    Name=updateDepartment.name;
    location=updateDepartment.location;
  
    let sql=`UPDATE members SET Department_Name='${Name}',Location='${location}' where Id='${req.params.id}'`;
    db.query(sql,(err,results)=>{
      if(err)throw err;
      res.send(results)
    })
  }
  
  const ddelete=(req,res)=>{
    let sql=`DELETE FROM department where id='${req.params.id}'`;
    db.query(sql,(err,results)=>{
      if(err){
        res.status(400).json({msg:`No department found with the id of ${req.params.id}`});
      }
      else{
        res.json(results);
      }
      
    })
  }

module.exports={dinsert,dlist,dupdate,ddelete};

