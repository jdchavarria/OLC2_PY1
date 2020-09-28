var fs = require('fs'); 
var parser = require('./gramatica2');

let ast;
try{
    const entrada = fs.readFileSync('./entrada.txt');
    ast = parser.parse(entrada.toString());
    console.log(ast);
    fs.writeFileSync('./ast.json',JSON.stringify(ast,null,2));

}catch(e){
    console.error(e);
    return;
}
