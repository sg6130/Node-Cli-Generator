const inquirer = require('inquirer')

var questions = [{
  name: 'TableCreation',
  message: "Would you like to continue?",
  default:false
}]


const connect = async (DatabaseUrl,TableCreation)=>{
    const {Pool,query} = require('pg');
    //credentials
    const dbUrl = DatabaseUrl;
    const pool = new Pool({
    connectionString : dbUrl
        }
    )
    pool.connect()
    .then(res=>{
        console.log("Result is -->",res);
    })
    .catch(error=>{
        console.log("Error is -->",error);
    });
    if(TableCreation === true)
    {
       
        const query = pool.query(
            'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
            .then((res)=>{
                console.log(res);
                pool.end();
            })
            .catch(error=>{
                console.log(res);
                pool.end(); 
            })
    
     }
}

const app = require('express')();

const portSet = (port)=>{
    console.log('1');
    app.set('port',port);
    app.listen(port,()=>{
        console.log('Listening on port number '+port);
    });
    app.get('/',()=>{console.log("hey dude");})
}


module.exports ={
    connect,
    portSet

}