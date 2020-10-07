export var tabla_simbolos = [];

//constantes para los tipos de datos que se controlan
const TIPO_DATO = {
    NUMBER: 'number',
    STRING: 'string',
    BOOLEAN: 'boolean',
}

//funcion para crear objetos de tipo simbolo 
function crearSimbolo(tipo_instr,id,tipo,valor,parametro){
    return{
        tipo_instr: tipo_instr,
        id: id,
        tipo: tipo,
        valor:valor,
        parametro:parametro
    }
}

//clase para crear instancias de la tabla de simbolos
class TS {
     _simbolos = [];
    //recibe como parametro los simbolos de la tabla padre
    constructor(simbolos){
        //console.log("tabla");
        this._simbolos = simbolos;
    }

    //funcion para agregar nuevo simbolo
    // para la sentencia declarar

    agregar(tipo_istr,id,tipo,parametro){
        const nuevoSimbolo = crearSimbolo(tipo_istr, id,tipo,"indefinido",parametro);
        this._simbolos.push(nuevoSimbolo);
    }

    agregar2(tipo_istr,id,tipo,valor,parametro){
        const nuevoSimbolo = crearSimbolo(tipo_istr, id,tipo,valor,parametro);
        this._simbolos.push(nuevoSimbolo);
        tabla_simbolos.push(nuevoSimbolo);
        console.log("llego a guardar");
    }

    //funcion para actualizar el valor de un simbolo existente
    //para sentencia asignar
    actualizar(id,valor){

        for(let i=0;i<this._simbolos.length;i++){
            if(this._simbolos[i].id == id){
                console.log(id);
                //console.log("no encuentra");
                this._simbolos[i].valor = valor;
                break;
            }else{
                //console.log("error no hay varibales");
            }
        }
       /* const simbolo = this._simbolos.filter(simbolo=> simbolo.id == id)[0];
        if(simbolo){
            console.log("esto");
            simbolo.valor = valor.valor;
           /* if(simbolo.tipo==valor.tipo){
                if(simbolo.tipo==TIPO_DATO.NUMBER){
                    if(valor.valor instanceof String){//por si viene en string
                        simbolo.valor = parseInt(valor.valor,10);
                    }else {
                        simbolo.valor = valor.valor;
                    }
                }else {
                    if(valor.valor instanceof Number){//
                        simbolo.valor = valor.valor.toString();
                    }else {
                        simbolo.valor = valor.valor;
                    }
                }
            }else{
                throw 'ERROR DE TIPOS';
            }*/
       // }else{
         //   throw 'ERROR: variable: '+id+'no ha sido definida';
       // }
    }

    actualizar2(id,valor){
        const simbolo = this._simbolos.filter(simbolo=> simbolo.id == id)[0];
        if(simbolo){
            simbolo.valor = valor;
           /* if(simbolo.tipo==valor.tipo){
                if(simbolo.tipo==TIPO_DATO.NUMBER){
                    if(valor.valor instanceof String){//por si viene en string
                        simbolo.valor = parseInt(valor.valor,10);
                    }else {
                        simbolo.valor = valor.valor;
                    }
                }else {
                    if(valor.valor instanceof Number){//
                        simbolo.valor = valor.valor.toString();
                    }else {
                        simbolo.valor = valor.valor;
                    }
                }
            }else{
                throw 'ERROR DE TIPOS';
            }*/
        }else{
            throw 'ERROR: variable: '+id+'no ha sido definida';
        }
    }

    obtener(id){
        //console.log(id);
        let simbolo:any=" ";
        for(let i=0;i<tabla_simbolos.length;i++){
            if(tabla_simbolos[i].id == id){
                //console.log(tabla_simbolos[i]);
                simbolo = tabla_simbolos[i];
                break;
            }else{
                //console.log("error");
            }
            //console.log(tabla_simbolos[i]);
        }
       /*const simbolo = this._simbolos.filter(simbolo => simbolo.id==id)[0];
        if(simbolo){
            console.log("obtener");
            return simbolo; //se devuelve el simbolo completo
        } 
        else throw 'ERROR: variable: '+id+'no ha sido definida';*/
        return simbolo;
    }

    obtenerValor(id){
       // console.log(id);
        const simbolo = this._simbolos.filter(simbolo=> simbolo.id == id)[0];
        if(simbolo){
            return simbolo.valor;
        }else{
            throw 'ERROR: VARIABLE NO DEFINIDA';
        }
    }
    // retorna todos los simbolos
    get simbolos(){
        return this._simbolos;
    }
}

//exportamos las constantes y la clase
export const TiPO_DATO = TIPO_DATO;
export  {TS};
export function resetTS(){
    tabla_simbolos = [];
    
}