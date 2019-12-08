module.exports.databaseType=[
    {'name' : 'Postgres'},
     {name  : 'MySql'}
]

module.exports.types = this.databaseType.map(name=>{
    return name.name
})

// module.exports = {
//     connect
// }