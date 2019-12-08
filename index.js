// #!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const dbConnection = require('./cli-app/databaseConnection');
const db = require('./cli-app/database')
const route = require('./Routes');
//list();
const questions = [
    {type:'list',name:'database',message:'To which database would you like to connect',choices:db.types},
    {name:'port',message:'Please give a port',default:4000},
    {name:'DatabaseUrl',message:'Provide the Database Url for connection',
    default:'postgres://[db-user]:[password]@127.0.0.1:5432/node-postgres-pg'},
    {name:'TableCreation',message:'Do you want to create new tables in database',default:false}
]

// program
//     .command('list')
//     .alias('ls')
//     .description('Menu')
//     .action(function(){
//         list();
//     });

// program.parse(process.argv);
inquirer
    .prompt(questions)
    .then(function(answer){
        console.log(answer);
        if(answer.database==='Postgres')
            {
                dbConnection.connect(answer.DatabaseUrl,answer.TableCreation);
            }
        
        dbConnection.portSet(answer.port);
    })

