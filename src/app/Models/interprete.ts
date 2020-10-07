//var fs = require('fs');
//var parser = require('./gramatica2');

//constantes para jalar las operaciones, instrucciones y valores del ast
import {TiPO_INSTRUCCION, TiPO_OPERACION, TiPO_VALOR, InstruccionesAPI, TiPO_OPCION_SWITCH} from './instrucciones';
// constantes para jalar los datos de la tabla de simbolos
import {TiPO_DATO, TS, tabla_simbolos} from './Tabla_Simbolos';


let consola = "";
let tsGlobal:TS; 

export function pr(ast){
    var tabla = [];
    tsGlobal =  new TS([]);
    //var tsGlobal;
    consola = "";
    ProcesarFunciones(ast,tsGlobal);
    return consola;
}

function ProcesarFunciones(instrucciones, tablaSimbolos){
    for(let i=0;i<instrucciones.length;i++){
        if(instrucciones[i].tipo==TiPO_INSTRUCCION.FUNCION){
            //GUARDAR AQUI
            console.log("guars");
            guardarFunciones(instrucciones[i], tablaSimbolos);
        }
    }
    procesarBloque(instrucciones,tablaSimbolos);
}

//metodo principal para recorrer las instrucciones en un bloque
//identificarlas y procesarlas
function procesarBloque(instrucciones,tablaSimbolos){
    //console.log(instrucciones);
    for(let i=0; i<instrucciones.length; i++){
        if(instrucciones[i].tipo==TiPO_INSTRUCCION.IMPRIMIR){
            procesarConsole(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.MIENTRAS){
            procesarWhile(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.FOR){
            procesarFor(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.DECLARACION){
            procesarDeclaracion(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.ASIGNACION){
            procesarAsignacion(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.IF){
            procesarIf(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo== TiPO_INSTRUCCION.IF_ELSE){
            procsarIfElse(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.SWITCH){
            procesarSwitch(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA){
            procesarAsignacionSimple(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo==TiPO_INSTRUCCION.AUMENTO){
            procesarAumento(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo == TiPO_INSTRUCCION.GRAFICAR){
            procesarGrafica(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo == TiPO_INSTRUCCION.LLAMADA_FUN){
            procesarFuncion(instrucciones[i],tablaSimbolos);
        }else if(instrucciones[i].tipo == TiPO_INSTRUCCION.FUNCION){

        }else if(instrucciones[i].tipo == TiPO_INSTRUCCION.NUEVO_ARR){
            procesarArray(instrucciones[i], tablaSimbolos);
        }else if(instrucciones[i].tipo == TiPO_INSTRUCCION.CONSOLE_ARRAY){
            console.log("deberia");
            procesarConsole_Array(instrucciones[i],tablaSimbolos);
        }else{
            console.log("no se reconoce");
            throw 'ERROR: TIPO DE INSTRUCCION NO VALIDA: '+ instrucciones[i];
        }
    }
}

/*funcion para operacion numerico (tengo que arreglar esto) recibe suma, resta,division,multi
tambien recibe los unarios y los identificadores cadenas, numeros
*/
function procesarExpresionNumerica(expresion,tablaSimbolos){
    //console.log(expresion);
    //console.log(expresion.tipo);
    if(expresion.tipo ==TiPO_OPERACION.NEGATIVO){
        //obtener el valor del operando recursivamente 
        const valor= procesarExpresionNumerica(expresion.operanIzq,tablaSimbolos);
        //retornar ya el valor negado
        const res = valor*-1;
        return{valor:res,tipo:TiPO_DATO.NUMBER};
    }else if(expresion.tipo==TiPO_OPERACION.SUMA || expresion.tipo==TiPO_OPERACION.RESTA || expresion.tipo==TiPO_OPERACION.MULTIPLICACION || expresion.tipo==TiPO_OPERACION.DIVISION){
        //obtener recursiamente los valores de operandoiz y operandere 
        let valorIzq = procesarExpresionNumerica(expresion.operaIzq,tablaSimbolos);
        let valorDer = procesarExpresionNumerica(expresion.operaDere,tablaSimbolos);
        if(valorIzq.tipo!=TiPO_DATO.NUMBER || valorDer.tipo!=TiPO_DATO.NUMBER){
            throw 'ERROR: se esperaban valores de tipo numero para realizar las operaciones: '+expresion.tipo;
        }else{
            valorIzq = valorIzq.valor;
            valorDer = valorDer.valor;
        }
        if(expresion.tipo==TiPO_OPERACION.SUMA){
            const res = valorIzq+valorDer;
            return {valor:res, tipo:TiPO_DATO.NUMBER};
        }
        if(expresion.tipo==TiPO_OPERACION.RESTA){
            const res= valorIzq-valorDer;
            return {valor:res,tipo:TiPO_DATO.NUMBER};
        }
        if(expresion.tipo==TiPO_OPERACION.MULTIPLICACION){
            const res= valorIzq*valorDer;
            return {valor:res,tipo:TiPO_DATO.NUMBER};
        }
        if(expresion.tipo ==TiPO_OPERACION.MODULO){
            //console.log("residuo");
            const residuo = valorIzq%valorDer;
            return{valor:residuo,tipo:TiPO_DATO.NUMBER};
        }
        if(expresion.tipo==TiPO_OPERACION.DIVISION){
            if(valorDer==0){
                throw 'ERROR: la division entre 0 da como resultado'+valorIzq/valorDer;
            }else{
                const res= valorIzq/valorDer;
                return {valor:res,tipo:TiPO_DATO.NUMBER};
            }
            
        }
    }else if(expresion.tipo==TiPO_VALOR.ENTERO){
        //es un valo numerico solo se retorna el valor obtenido
        return{valor: expresion.valor,tipo:TiPO_DATO.NUMBER};
    }else if(expresion.tipo == TiPO_VALOR.IDENTIFICADOR){
        //se obtiene el valor de la tabla de simbolos
        const sym = tablaSimbolos.obtener(expresion.valor);
        return{valor:sym.valor,tipo:sym.tipo};
    }else if(expresion.tipo == TiPO_INSTRUCCION.ACCEDER_VEC){
        console.log("entro a acedeer");
        const simbol = tablaSimbolos.obtener(expresion.identificador);
        const posicion = procesarExpresionNumerica(expresion.expresion, tablaSimbolos);
        if(posicion.tipo == TiPO_DATO.NUMBER){
            const res = {valor: simbol.valor[posicion.valor],tipo:simbol.tipo};
            return res;
        }else{
            console.log("error");
        }
    }else if(expresion.tipo == TiPO_INSTRUCCION.LONG_VEC){
        expresion.tipo = TiPO_VALOR.IDENTIFICADOR;
        const res = procesarExpresionNumerica(expresion,tablaSimbolos);
        return {valor:8,tipo:TiPO_DATO.NUMBER};
    }else{
        throw 'ERROR: expresion numerica no valida: '+ expresion;
    }
}

//para pocesar las concatenaciones de cadenas
function procesarCadena(expresion,tablaSimbolos){
    if(expresion.tipo==TiPO_OPERACION.CONCATENACION){
        //obtenemos los valores recursivamente
        const cadIzq = procesarExpresionNumerica(expresion.operaIzq,tablaSimbolos);
        const cadDer = procesarExpresionNumerica(expresion.operaDere,tablaSimbolos);
        //se retorna el resultado de la concatenacion
        const res = cadIzq+cadDer;
        return {valor:res,tipo: TiPO_DATO.STRING};
    }else if(expresion.tipo == TiPO_VALOR.CADENA){
       // console.log("deberia");
        //console.log(expresion.valor);
        return{valor:expresion.valor,tipo:TiPO_DATO.STRING};
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
    if(valorIzq.tipo!=TiPO_DATO.NUMBER || valorDer.tipo!=TiPO_DATO.NUMBER){
        throw 'ERROR: SE esperaban expresiones numericas para ejecutar'
    }else{
        valorIzq = valorIzq.valor;
        valorDer = valorDer.valor;
    }
    if(expresion.tipo==TiPO_OPERACION.MAYOR_QUE) return valorIzq > valorDer;
    if(expresion.tipo==TiPO_OPERACION.MENOR_QUE) return valorIzq < valorDer;
    if(expresion.tipo==TiPO_OPERACION.MAYOR_IGUAL) return valorIzq >= valorDer;
    if(expresion.tipo== TiPO_OPERACION.MENOR_IGUAL) return valorIzq <= valorDer;
    if(expresion.tipo == TiPO_OPERACION.DOBLE_IGUAL) return valorIzq == valorDer;
    if(expresion.tipo==TiPO_OPERACION.NO_IGUAL) return valorIzq != valorDer;
    
}

//PARA PROCESAR EXPRESIONES LOGICAS
function procesarLogica(expresion,tablaSimbolos){
    if(expresion.tipo==TiPO_OPERACION.AND){
        const valorIzq = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        const valorDer = procesarRelacional(expresion.operaDere,tablaSimbolos);
        return valorIzq && valorDer;
    }
    if(expresion.tipo==TiPO_OPERACION.OR){
        const valorIzq = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        const valorDer = procesarRelacional(expresion.operaDere,tablaSimbolos);
        return valorIzq || valorDer;
    }
    if(expresion.tipo==TiPO_OPERACION.NOT){
        const valor = procesarRelacional(expresion.operaIzq,tablaSimbolos);
        return !valor;
    }
    return procesarRelacional(expresion,tablaSimbolos);
}

//https://www.youtube.com/watch?v=PvFC7yyfa5E

function guardarFunciones(instrucciones, tablaSimbolos){
    console.log(instrucciones.identificador);
    tablaSimbolos.agregar2("funcion",instrucciones.identificador, instrucciones.tipo2,instrucciones.instrucciones,instrucciones.parametros);
}

//funcion para procesar la instruccion console
function procesarConsole(instruccion,tablaSimbolos){
   // console.log(instruccion.expresionCadena);
    const cadena = procesarCadena(instruccion.expresionCadena,tablaSimbolos);
    console.log();
    if(instruccion.expresionCadena.tipo == TiPO_VALOR.IDENTIFICADOR){
        console.log('>> '+cadena.valor.valor);
        consola += cadena.valor.valor +'\n';
    }else{
        //console.log("dddd");
        console.log('>> '+cadena.valor);
        consola += cadena.valor +'\n';
    }
        
    
    
}

//funcion para procesar la instruccion declaracion
function procesarDeclaracion(instruccion,tablaSimbolos){
    tablaSimbolos.agregar("variable",instruccion.identificador,instruccion.tipo_dato);
}

//funcion para procesar la instruccion asignacion
function procesarAsignacion(instruccion,tablaSimbolos){
    tablaSimbolos.agregar2("variable",instruccion.identificador,instruccion.tipo3,instruccion.expresion);
    if(instruccion.expresion.tipo == TiPO_INSTRUCCION.ASIGNAR_VEC || instruccion.expresion ===undefined){
        procesarArreglo(instruccion, tablaSimbolos);
    }else{
        const valor = procesarCadena(instruccion.expresion, tablaSimbolos);
        console.log(valor);
        tablaSimbolos.actualizar(instruccion.identificador, valor);
    }
    
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
        tablaSimbolos.actualizar(instruccion.variable,{valor:tablaSimbolos.obtener(instruccion.variable).valor+1, tipo: TiPO_DATO.NUMBER})){
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
        if(caso.tipo==TiPO_OPCION_SWITCH.CASO){
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
        tablaSimbolos.agregar2("variable",instruccion.identificador,instruccion.tipo2,valor);
    }else{
        const expresion = InstruccionesAPI.nuevoOperacionBinaria(InstruccionesAPI.nuevoValor(instruccion.identificador,TiPO_VALOR.IDENTIFICADOR),instruccion.expresion,instruccion.operador);
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
    console.log("llego a funcion");
    let correcto:boolean = false;
    const funcion_guard = tablaSimbolos.obtener(instruccion.identificador);
    const tsFuncion = new TS(generarTabla(tsGlobal.simbolos));
    //console.log(instruccion.parametros);
    //console.log(funcion_guard.parametro);
    if(instruccion.parametros=="sin" && funcion_guard.parametro=="vacio"){
        correcto = true;
    }else if(instruccion.parametros !=="vacio" && funcion_guard.parametro !== "vacio"){
        if(instruccion.parametros.length=== funcion_guard.parametro.length){
            //console.log("llego");
            procesarParametros(funcion_guard.parametro, instruccion.parametros,tsFuncion,tablaSimbolos);
            correcto = true;
        }else{
            console.log("error semantico");
        }
    }else{
        console.log("error semantico parametros");
    }
    if(correcto){
        console.log("es true");
        procesarBloque(funcion_guard.valor, tsFuncion);
    }
}

function generarTabla(tablaSimbolos){
    let anterior = [];
    tablaSimbolos.forEach(simbolos =>{
        anterior.push(simbolos);
    });
    return anterior;
}

function procesarParametros(parametros, mandados,tablaActual, tablaAnterior){
    console.log(parametros.length);
    for(let i=0; i<parametros.length;i++){
        console.log(parametros[i].identificador);
        console.log(mandados[i]);
        const param = InstruccionesAPI.nuevoAsignacion(parametros[i].identificador, parametros[i].tipo,mandados[i]);
        procesarAsignacion(param,tablaAnterior);
        const valor =procesarCadena(param.expresion,tablaAnterior);
        console.log(valor);
        tablaActual.actualizar(param.identificador,valor); 
    }
}

function procesarArray(instruccion, tablaSimbolos){
    const obtenerarr = procesarCadena(instruccion.valor,tabla_simbolos);
    const valorarr = tablaSimbolos.obtener(instruccion.array);
    const posicion = procesarExpresionNumerica(instruccion.array.expresion,tablaSimbolos);
    if(posicion.tipo == TiPO_DATO.NUMBER){
        if(obtenerarr.tipo==valorarr.tipo){
            valorarr.valor[posicion.valor] = obtenerarr.valor;
            const nuevo_valor = {valor:valorarr.valor, tipo:valorarr.tipo}
            tablaSimbolos.actualizar(valorarr.identificador,nuevo_valor);
        }else{
            console.log("error no es de tipo");
        }
    }else{
        console.log("solo numeros");
    }
}

function  procesarConsole_Array(instruccion, tablaSimbolos){
    const valores = procesarCadena(instruccion.expresion,tablaSimbolos);
    const arra = procesarCadena(instruccion.identificador,tablaSimbolos);
    console.log(arra.valor.valor);
    consola += valores.valor + "  [ ";
    for(let i =0;i<(arra.valor.valor).length;i++){
        console.log("1");
        const elemento = (arra.valor.valor)[i];
        console.log(elemento);
        if(i==(arra.valor.valor).length-1){
            consola += elemento +" ] ";
            break;
        }
        consola += elemento+", ";
    }
    consola += "\n";
}

function procesarArreglo(instruccion,tablaSimbolos){
    console.log("llego arreglo");
    let arreglo:any[] = [];
    const elemento = instruccion.expresion.expresion;
    const simbol = tablaSimbolos.obtener(instruccion.identificador);
    console.log(simbol);
    if(elemento ===undefined){
        const new_valor = { valor: arreglo, tipo: simbol.tipo }
         tablaSimbolos.actualizar(simbol.identificador, new_valor);
    }
    for (let index = 0; index < elemento.length; index++) {
        const element = elemento[index];
        const valor = procesarCadena(element, tablaSimbolos);
        //console.log(valor);
        if (valor.tipo === simbol.tipo) {
            arreglo.push(valor.valor); //gurada elementos del array
        } else {
            console.log("no es de tipo");
          //Terrores.add("semantico", 'elemento ' + valor.tipo + ' no valido, el array es de tipo ' + sym.tipo, instruccion.linea, instruccion.columna);
        }
      }
    
        const new_valor = { valor: arreglo, tipo: simbol.tipo }
        tablaSimbolos.actualizar(simbol.id, new_valor);
}
