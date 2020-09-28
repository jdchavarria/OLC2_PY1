//constantes para los tipos de datos que se controlan
const TIPO_DATO = {
    NUMBER: 'number',
    STRING: 'string',
    BOOLEAN: 'boolean',
}

//funcion para crear objetos de tipo simbolo 
function crearSimbolo(id,tipo,valor){
    return{
        id: id,
        tipo: tipo,
        valor:valor
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

    agregar(id,tipo){
        const nuevoSimbolo = crearSimbolo(id,tipo,"indefinido");
        this._simbolos.push(nuevoSimbolo);
    }

    agregar2(id,tipo,valor){
        const nuevoSimbolo = crearSimbolo(id,tipo,valor);
        this._simbolos.push(nuevoSimbolo);
    }

    //funcion para actualizar el valor de un simbolo existente
    //para sentencia asignar
    actualizar(id,valor){
        const simbolo = this._simbolos.filter(simbolo=> simbolo.id == id)[0];
        if(simbolo){
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
        }else{
            throw 'ERROR: variable: '+id+'no ha sido definida';
        }
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
        const simbolo = this._simbolos.filter(simbolo => simbolo.id==id)[0];
        if(simbolo) return simbolo; //se devuelve el simbolo completo
        else throw 'ERROR: variable: '+id+'no ha sido definida';
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
export const Ts = TS;