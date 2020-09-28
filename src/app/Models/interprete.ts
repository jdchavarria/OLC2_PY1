//var fs = require('fs');
//var parser = require('./gramatica2');

//constantes para jalar las operaciones, instrucciones y valores del ast
const TIPO_INSTRUCCION = require('./instrucciones').TiPO_INSTRUCCION;
const TIPO_OPERACION = require('./instrucciones').TiPO_OPERACION;
const TIPO_VALOR = require('./instrucciones').TiPO_VALOR;
const instruccionesAPI = require('./instrucciones').InstruccionesAPI;
const TIPO_OPCION_SWITCH = require('./instrucciones').TiPO_OPCION_SWITCH;

// constantes para jalar los datos de la tabla de simbolos
const TIPO_DATO = require('./Tabla_Simbolos').TiPO_DATO;
const TS = require('./Tabla_Simbolos').Ts;


export function pr(ast){
    //console.log("llego");
    var tabla = [];
    const tsGlobal =  new TS(tabla);
    //var tsGlobal;
    procesarBloque(ast,tsGlobal);
    //return procesarBloque(ast,tsGlobal);
}
//creacion de una tala de simbolos global para iniciar
//const tsGlobal =  new TS([]);
//se procesan las instrucciones reconocidas en el ast
//procesarBloque(ast,tsGlobal);

//metodo principal para recorrer las instrucciones en un bloque
//identificarlas y procesarlas
function procesarBloque(instrucciones,tablaSimbolos){
    //console.log(instrucciones);
   // console.log(instrucciones);
    instrucciones.forEach(instruccion => { //recorre el array por cada elemento
        if(instruccion.tipo==TIPO_INSTRUCCION.IMPRIMIR){
            //console.log("consola");
            //procesar la instruccion console.log
            procesarConsole(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.MIENTRAS){
           // console.log("entro en el while");
            procesarWhile(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.FOR){
            procesarFor(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.DECLARACION){
            procesarDeclaracion(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.ASIGNACION){
            procesarAsignacion(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.IF){
            procesarIf(instruccion,tablaSimbolos);
        }else if(instruccion.tipo== TIPO_INSTRUCCION.IF_ELSE){
           // console.log("entro al if");
            procsarIfElse(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.SWITCH){
            procesarSwitch(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA){
            //console.log("entro a simple");
            procesarAsignacionSimple(instruccion,tablaSimbolos);
        }else if(instruccion.tipo==TIPO_INSTRUCCION.AUMENTO){
            //console.log("aumento");
            procesarAumento(instruccion,tablaSimbolos);
        }else if(instruccion.tipo == TIPO_INSTRUCCION.GRAFICAR){
            procesarGrafica(instruccion,tablaSimbolos);
        }else if(instruccion.tipo == TIPO_INSTRUCCION.FUNCION){
            //console.log("entro a esto");
            procesarFuncion(instruccion,tablaSimbolos);
        }else{
            throw 'ERROR: TIPO DE INSTRUCCION NO VALIDA: '+ instruccion;
        }
    });
}

/*funcion para operacion numerico (tengo que arreglar esto) recibe suma, resta,division,multi
tambien recibe los unarios y los identificadores cadenas, numeros
*/
function procesarExpresionNumerica(expresion,tablaSimbolos){
    //console.log(expresion);
    //console.log(expresion.tipo);
    if(expresion.tipo ==TIPO_OPERACION.NEGATIVO){
        //obtener el valor del operando recursivamente 
        const valor= procesarExpresionNumerica(expresion.operanIzq,tablaSimbolos);
        //retornar ya el valor negado
        const res = valor*-1;
        return{valor:res,tipo:TIPO_DATO.NUMBER};
    }else if(expresion.tipo==TIPO_OPERACION.SUMA || expresion.tipo==TIPO_OPERACION.RESTA || expresion.tipo==TIPO_OPERACION.MULTIPLICACION || expresion.tipo==TIPO_OPERACION.DIVISION){
        //obtener recursiamente los valores de operandoiz y operandere 
        let valorIzq = procesarExpresionNumerica(expresion.operaIzq,tablaSimbolos);
        let valorDer = procesarExpresionNumerica(expresion.operaDere,tablaSimbolos);
        if(valorIzq.tipo!=TIPO_DATO.NUMBER || valorDer.tipo!=TIPO_DATO.NUMBER){
            throw 'ERROR: se esperaban valores de tipo numero para realizar las operaciones: '+expresion.tipo;
        }else{
            valorIzq = valorIzq.valor;
            valorDer = valorDer.valor;
        }
        if(expresion.tipo==TIPO_OPERACION.SUMA){
            const res = valorIzq+valorDer;
            return {valor:res, tipo:TIPO_DATO.NUMBER};
        }
        if(expresion.tipo==TIPO_OPERACION.RESTA){
            const res= valorIzq-valorDer;
            return {valor:res,tipo:TIPO_DATO.NUMBER};
        }
        if(expresion.tipo==TIPO_OPERACION.MULTIPLICACION){
            const res= valorIzq*valorDer;
            return {valor:res,tipo:TIPO_DATO.NUMBER};
        }
        if(expresion.tipo ==TIPO_OPERACION.MODULO){
            //console.log("residuo");
            const residuo = valorIzq%valorDer;
            return{valor:residuo,tipo:TIPO_DATO.NUMBER};
        }
        if(expresion.tipo==TIPO_OPERACION.DIVISION){
            if(valorDer==0){
                throw 'ERROR: la division entre 0 da como resultado'+valorIzq/valorDer;
            }else{
                const res= valorIzq/valorDer;
                return {valor:res,tipo:TIPO_DATO.NUMBER};
            }
            
        }
    }else if(expresion.tipo==TIPO_VALOR.ENTERO){
        //es un valo numerico solo se retorna el valor obtenido
        return{valor: expresion.valor,tipo:TIPO_DATO.NUMBER};
    }else if(expresion.tipo == TIPO_VALOR.IDENTIFICADOR){
        //se obtiene el valor de la tabla de simbolos
        const sym = tablaSimbolos.obtener(expresion.valor);
        return{valor:sym.valor,tipo:sym.tipo};
    }else{
        throw 'ERROR: expresion numerica no valida: '+ expresion;
    }
}

//para pocesar las concatenaciones de cadenas
function procesarCadena(expresion,tablaSimbolos){
    if(expresion.tipo==TIPO_OPERACION.CONCATENACION){
        //obtenemos los valores recursivamente
        const cadIzq = procesarExpresionNumerica(expresion.operaIzq,tablaSimbolos);
        const cadDer = procesarExpresionNumerica(expresion.operaDere,tablaSimbolos);
        //se retorna el resultado de la concatenacion
        const res = cadIzq+cadDer;
        return {valor:res,tipo: TIPO_DATO.STRING};
    }else if(expresion.tipo == TIPO_VALOR.CADENA){
       // console.log("deberia");
        //console.log(expresion.valor);
        return{valor:expresion.valor,tipo:TIPO_DATO.STRING};
    }else {
        //es una expresion numerica
        return procesarExpresionNumerica(expresion,tablaSimbolos);
    }
}

//para procesar las expresiones relacionales
function procesarRelacional(expresion,tablaSimbolos){
    let valorIzq = procesarExpresionNumerica(expresion.operaIzq,tablaSimbolos);
    let valorDer = procesarExpresionNumerica(expresion.operaDere,tablaSimbolos);
    console.log(valorDer);
    console.log(valorIzq);
    if(valorIzq.tipo!=TIPO_DATO.NUMBER || valorDer.tipo!=TIPO_DATO.NUMBER){
        throw 'ERROR: SE esperaban expresiones numericas para ejecutar'
    }else{
        valorIzq = valorIzq.valor;
        valorDer = valorDer.valor;
    }
    if(expresion.tipo==TIPO_OPERACION.MAYOR_QUE) return valorIzq > valorDer;
    if(expresion.tipo==TIPO_OPERACION.MENOR_QUE) return valorIzq < valorDer;
    if(expresion.tipo==TIPO_OPERACION.MAYOR_IGUAL) return valorIzq >= valorDer;
    if(expresion.tipo== TIPO_OPERACION.MENOR_IGUAL) return valorIzq <= valorDer;
    if(expresion.tipo == TIPO_OPERACION.DOBLE_IGUAL) return valorIzq == valorDer;
    if(expresion.tipo==TIPO_OPERACION.NO_IGUAL) return valorIzq != valorDer;
    
}

//PARA PROCESAR EXPRESIONES LOGICAS
function procesarLogica(expresion,tablaSimbolos){
    if(expresion.tipo==TIPO_OPERACION.AND){
        const valorIzq = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        const valorDer = procesarRelacional(expresion.operaDere,tablaSimbolos);
        return valorIzq && valorDer;
    }
    if(expresion.tipo==TIPO_OPERACION.OR){
        const valorIzq = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        const valorDer = procesarRelacional(expresion.operaDere,tablaSimbolos);
        return valorIzq || valorDer;
    }
    if(expresion.tipo==TIPO_OPERACION.NOT){
        const valor = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        return !valor;
    }
    return procesarRelacional(expresion,tablaSimbolos);
}

//https://www.youtube.com/watch?v=PvFC7yyfa5E

//funcion para procesar la instruccion console
function procesarConsole(instruccion,tablaSimbolos){
    console.log(instruccion.expresionCadena);
    const cadena = procesarCadena(instruccion.expresionCadena,tablaSimbolos);
    console.log('>> '+cadena.valor);
}

//funcion para procesar la instruccion declaracion
function procesarDeclaracion(instruccion,tablaSimbolos){
    tablaSimbolos.agregar(instruccion.identificador,instruccion.tipo_dato);
}

//funcion para procesar la instruccion asignacion
function procesarAsignacion(instruccion,tablaSimbolos){
    const valor = procesarCadena(instruccion.expresion, tablaSimbolos);
    //console.log(valor);
    tablaSimbolos.agregar2(instruccion.identificador,"number",valor.valor);
}

//funcion para procesar el while
function procesarWhile(instruccion,tablaSimbolos){
    //const valor = procesarLogica(instruccion.expresionLogica,tablaSimbolos);
   // console.log(valor);
    while(procesarLogica(instruccion.expresionLogica,tablaSimbolos)){
        const tswhile = new TS(tablaSimbolos.simbolos); //crea una nueva tabla de simbolos
        procesarBloque(instruccion.instrucciones,tswhile); //vuelve a crear el bloque
    }
}

//funcion para procesar el for
function procesarFor(instruccion,tablaSimbolos){
    const valor = procesarExpresionNumerica(instruccion.valorVariable,tablaSimbolos);//retorna el tipo y el valor
    tablaSimbolos.actualizar(instruccion.variable,valor);
    for(var i= tablaSimbolos.obtener(instruccion.variable);procesarLogica(instruccion.expresionLogica,tablaSimbolos);
        tablaSimbolos.actualizar(instruccion.variable,{valor:tablaSimbolos.obtener(instruccion.variable).valor+1, tipo: TIPO_DATO.NUMBER})){
            const tsFor = new TS(tablaSimbolos.simbolos); //crea nueva tabla de simbolos
            procesarBloque(instruccion.instrucciones,tsFor); //crea nuevo bloque de sentencias
        }
}

//funcion para procesar el if
function procesarIf(instruccion,tablaSimbolos){
    const valorCondicion = procesarLogica(instruccion.expresionLogica,tablaSimbolos);
    if(valorCondicion){
        const tsIf = new TS(tablaSimbolos.simbolos);
        procesarBloque(instruccion.instrucciones,tsIf);
    }
}

//funcion para procesar el ifElse
function procsarIfElse(instruccion,tablaSimbolos){
    const valorCondicion = procesarLogica(instruccion.expresionLogica,tablaSimbolos);
    console.log(valorCondicion);
    if(valorCondicion){
        const tsIf = new TS(tablaSimbolos.simbolos);
        console.log(tablaSimbolos.simbolos);
        console.log(tsIf);
        procesarBloque(instruccion.instruccionesVerdadero,tsIf);
    }else{
        const tsElse = new TS(tablaSimbolos.simbolos);
        procesarBloque(instruccion.instruccionesFalse,tsElse);
    }
}

//funcion para procesar el switch
function procesarSwitch(instruccion,tablaSimbolos){
    var evaluar = true;
    const valorExpresion = procesarExpresionNumerica(instruccion.expresion,tablaSimbolos);
    const tsSwitch = new TS(tablaSimbolos.simbolos);

    instruccion.casos.forEach(caso => {
        if(caso.tipo==TIPO_OPCION_SWITCH.CASO){
            const valorExpCase = procesarExpresionNumerica(caso.expresion,tsSwitch);
            if(valorExpCase.valor == valorExpresion.valor){
                procesarBloque(caso.instrucciones,tsSwitch);
                evaluar = false;
            }
        }else{
            if(evaluar)
                procesarBloque(caso.instrucciones,tsSwitch);
        }
    });

}

//funcion para procesar la instruccion asignacion simplificada
function procesarAsignacionSimple(instruccion,tablaSimbolos){
    //console.log(instruccion.identificador);
    if(instruccion.operador == '='){
        const valor = procesarCadena(instruccion.expresion, tablaSimbolos);
        tablaSimbolos.agregar2(instruccion.identificador,instruccion.tipo2,valor);
    }else{
        const expresion = instruccionesAPI.nuevoOperacionBinaria(instruccionesAPI.nuevoValor(instruccion.identificador,TIPO_VALOR.IDENTIFICADOR),instruccion.expresion,instruccion.operador);
        //console.log(instruccion.expresion);
        console.log(expresion);
        const valor = procesarExpresionNumerica(expresion,tablaSimbolos);
        console.log(valor);
        tablaSimbolos.actualizar(instruccion.identificador,valor);

    }
    
}
//para procesar el aumento ++ y --
function procesarAumento(instruccion,tablaSimbolos){
    //var++
    let aumento;
    if(instruccion.operador == '+'){
        aumento = tablaSimbolos.obtenerValor(instruccion.identificador);
        aumento = aumento+1;

    }else if(instruccion.operador == '-'){
        aumento = tablaSimbolos.obtenerValor(instruccion.identificador);
        aumento = aumento-1;
    }
    console.log(aumento);
    tablaSimbolos.actualizar2(instruccion.identificador,aumento);
}

function procesarGrafica(instruccion,tablaSimbolos){
    console.log("tabla de simbolos: ",tablaSimbolos);
}

function procesarFuncion(instruccion,tablaSimbolos){
    //console.log("entro fun");
    //const tsFun = new TS(tablaSimbolos.simbolos);
    console.log(instruccion.instrucciones);
    procesarBloque(instruccion.instrucciones,tablaSimbolos);
}

//const interprete = new Interprete(ast);