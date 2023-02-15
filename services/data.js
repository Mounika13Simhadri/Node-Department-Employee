// const express=require('express')
// const db=require('../models/dbconnection');

// async function insertDepartment(req){
//     const id=req.body.Id;
//     const name=req.body.Department_Name;
//     const location=req.body.Location;
//     const rows = await db.query(`INSERT INTO department VALUES(${id},'${name}','${location}')`);
  
//     return {
//         rows 
//     }
//   }

//   module.exports={insertDepartment};