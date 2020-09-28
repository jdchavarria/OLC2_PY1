//contantes para tipos de valores del lenguaje
const TIPO_VALOR ={
    ENTERO: 'number',
    IDENTIFICADOR: 'VAL_IDENTIFICADOR',
    DECIMAL: 'VAL_DECIMAL',
    CADENA: 'VAL_CADENA',
    TRUE: 'VAL_TRUE',
    FALSE: 'VAL_FALSE',
}

//constantes para los tipos de operaciones del lenguaje
const TIPO_OPERACION = {
    SUMA: 'OP_SUMA',
    RESTA: 'OP_RESTA',
    MULTIPLICACION: 'OP_MULTIPLICACION',
    DIVISION: 'OP_DIVISION',
    NEGATIVO: 'OP_NEGATIVO',
    MAYOR_QUE: 'OP_MAYOR_QUE',
    MENOR_QUE: 'OP_MENOR_QUE',
    MAYOR_IGUAL: 'OP_MAYOR_IGUAL',
    MENOR_IGUAL: 'OP_MENOR_IGUAL',
    DOBLE_IGUAL: 'OP_DOBLE_IGUAL',
    NO_IGUAL: 'OP_NO_IGUAL',
    AND: 'OP_AND',
    OR: 'OP_OR',
    NOT: 'OP_NOT',
    CONCATENACION: 'OP_CONCATENACION',
    POTENCIA: 'OP_POTENCIA',
    MODULO: 'MODULO'
}

//constantes para los tipos de instrucciones del lenguaje
const TIPO_INSTRUCCION = {
    IMPRIMIR: 'INSTR_CONSOLE',
    MIENTRAS: 'INSTR_WHILE',
    DECLARACION: 'INSTR_DECLARACION',
    ASIGNACION: 'INSTR_ASIGNACION',
    IF: 'INSTR_IF',
    IF_ELSE: 'INSTR_IF_ELSE',
    FOR: 'INSTR_FOR',
    SWITCH: 'INSTR_SWITCH',
    SWITCH_OP: 'INSTR_SWITCH_OP',
    SWITCH_DEF: 'INSTR_SWITCH_DEF',
    ASIGNACION_SIMPLIFICADA: 'ASIGNACION_SIMPLE',
    AUMENTO:       'INSTR_AUMENTO',
    FUNCION:  'INSTR_FUNCION',
    GRAFICAR:  'INSTR_GRAFICAR',
    DOWHILE:    'INSTR_DOWHILE'
}

//constantes para el tipo de casos del switch
const TIPO_OPCION_SWITCH = {
    CASO: 'CASO',
    DEFAULT: 'DEFAULT'
}

//funcion que retorna objetos de tipo operacion recibe los operandos y el operador
function nuevaOperacion(operaIzq,operaDere,tipo){
    return{
        operaIzq: operaIzq,
        operaDere: operaDere,
        tipo: tipo
    }
}

//constante para retornar los tipos de operaciones e instrucciones
const instruccionesAPI ={
    //retorna objetos de tipo operacion para operaciones binarias
    nuevoOperacionBinaria: function(operaIzq,operaDere,tipo){
        return nuevaOperacion(operaIzq,operaDere,tipo);
        },

    //retorna objetos para operaciones unarias
    nuevoOperacionUnaria: function(operando, tipo){
        return nuevaOperacion(operando,undefined,tipo);
    },

    //retorna o crea objetos tipo valor son los valores que acepta el lenguaje
    nuevoValor: function(valor,tipo){
        return{
            tipo: tipo,
            valor: valor
        }
    },

    //retorna o crea objeto de tipo instrucciones
    //crea objetos console
    nuevoConsole: function(expresionCadena){
        return{
            tipo: TIPO_INSTRUCCION.IMPRIMIR,
            expresionCadena: expresionCadena
        };
    },

    //retorna o crea objetos tipo while
    nuevoWhile: function(expresionLogica,instrucciones){
        return{
            tipo: TIPO_INSTRUCCION.MIENTRAS,
            expresionLogica: expresionLogica,
            instrucciones: instrucciones
        };
    },

    //retorna o crea objetos tipo for
    nuevoFor: function(variable, tipo_val, valorVariable,expresionLogica,aumento,instrucciones){
        return{
            tipo: TIPO_INSTRUCCION.FOR,
            expresionLogica: expresionLogica,
            instrucciones: instrucciones,
            aumento: aumento,
            variable: variable,
            valorVariable: valorVariable,
            tipo_val: tipo_val
        }
    },
    
    nuevoIterador:function(valor, tipo_incremento){
        return{
            valor: valor,
            tipo_incremento: tipo_incremento
        }
    },
    //retorna o crea objetos tipo declaracion de variables
    nuevoDeclaracion: function(identificador,tipo){
        return{
            tipo: TIPO_INSTRUCCION.DECLARACION,
            identificador: identificador,
            tipo_dato: tipo
        }
    },

    //retorna o crea objetos de tipo asignacion valores a variables
    nuevoAsignacion: function(identificador,tipo3, expresion){
        return{
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            identificador: identificador,
            expresion: expresion,
            tipo3:  tipo3
        }
    },

    //retorna o crea objetos tipo sentencia if
    nuevoIf: function(expresionLogica, instrucciones){
        return{
            tipo:TIPO_INSTRUCCION.IF,
            expresionLogica: expresionLogica,
            instrucciones: instrucciones
        }
    },

    //retorna o crea objetos if-else,
    nuevoIfElse: function(expresionLogica, instruccionesVerdadero, instruccionesFalse){
        return{
            tipo: TIPO_INSTRUCCION.IF_ELSE,
            expresionLogica: expresionLogica,
            instruccionesVerdadero: instruccionesVerdadero,
            instruccionesFalse: instruccionesFalse
        }
    },

    //retorna o crea objetos de tipo switch
    nuevoSwitch: function(expresion,casos){
        return{
            tipo: TIPO_INSTRUCCION.SWITCH,
            expresion: expresion,
            casos: casos
        }
    },

    //crea la lista de casos para el switch
    nuevoListaCasos: function(caso){
        var casos = [];
        casos.push(caso);
        return  casos;
    },

    //crea el objeto para las opciones del switch
    nuevoCaso: function(expresion,instrucciones){
        return{
            tipo: TIPO_OPCION_SWITCH.CASO,
            expresion: expresion,
            instrucciones: instrucciones
        }
    },

    //crea el objeto para el caso default del switch
    nuevoCasoDef: function(instrucciones){
        return{
            tipo: TIPO_OPCION_SWITCH.DEFAULT,
            instrucciones: instrucciones
        }
    },

    //crea objeto de tipo operador(+,-,/,*)
    nuevoOperador: function(operador){
        return operador
    },

    //crea y retorna el objeto tipo asignacion con operadores
    nuevoAsignacionSimplificada: function(identificador,tipo2,operador,expresion){
        return{
            tipo: TIPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA,
            operador: operador,
            expresion: expresion,
            identificador: identificador,
            tipo2: tipo2
        }
    },

    nuevoAumento: function(identificador, operador){
        return{
            tipo: TIPO_INSTRUCCION.AUMENTO,
            identificador:identificador,
            operador:operador
        }
    },
    nuevoFuncion: function(identificador, parametros, tipo2,  instrucciones){
        return{
            tipo: TIPO_INSTRUCCION.FUNCION,
            identificador: identificador,
            tipo2: tipo2,
            parametros: parametros,
            instrucciones: instrucciones
        }
    },

    nuevoGraficar: function(instruccion){
        return{
            tipo: TIPO_INSTRUCCION.GRAFICAR,
            instruccion: instruccion
        }
    },

    nuevoDoWhile(instrucciones,expresion){
        return{
            tipo: TIPO_INSTRUCCION.DOWHILE,
            instrucciones: instrucciones,
            expresion: expresion
        }
    }
}

//importando las funciones para tener acceso a ellas en la gramatica

export const TiPO_OPERACION = TIPO_OPERACION;
export const TiPO_INSTRUCCION = TIPO_INSTRUCCION;
export const TiPO_VALOR = TIPO_VALOR;
export const InstruccionesAPI = instruccionesAPI;
export const TiPO_OPCION_SWITCH = TIPO_OPCION_SWITCH;
