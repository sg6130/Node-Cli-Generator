const {Pool,query} = require('pg');
const dbUrl = require('../index');

const getRecord = async (req,res)=>{
    const pool = new Pool({
        connectionString:dbUrl.dbURL
    }) 
    pool.connect().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    try{
    var query = pool.query('Select * from dbname');
    query.on('rows',(rosw)=>{
        res.status(200).send(rows);
    })
    query.on('end',()=>{
        pool.end();
    }) 
    }
    catch(error){
        res.send(error);
    }
}

module.exports = {
    getRecord
}