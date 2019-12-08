module.exports.types= [
{name:"Espresso",price:'3'},
{name:"Latte",price:'2'}
]

module.exports.typesPlain = exports.types.map(function(o){
return o.name+'('+ o.price +')';
});
