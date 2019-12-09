const {Pool,query} = require('pg');
const dbUrl = require('../index');

const insertRecords = async (req,res)=>{
    const pool = new Pool({
        connectionString:dbUrl.dbURL
    })
    pool.connect().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    try{
    var query = pool.query("insert into dbname (firstName,lastName,email,mobile) "+ 
    "values ('"+req.body.fName+"','"+req.body.lName+"','"+
        req.body.email+"','"+req.body.mbl+"')");
    query.on('end',(result)=>{
        res.status(200).send('Inserted data successfully');
    })
}
catch(error){
    console.log(error);
    res.send(error);
}
}
module.exports={
    insertRecords
}