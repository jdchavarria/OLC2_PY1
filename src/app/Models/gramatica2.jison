/**
 * Ejemplo mi primer proyecto con Jison utilizando Nodejs en Ubuntu
 */

/* Definición Léxica */
%lex

%options case-sensitive

%%

\s+    //se ignoran espacios en blanco
"//".*   //se ignoran comentarios de una linea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   //comentario multilinea

/* palabras reservadas */

"let"                       return 'RLET';
"function"                  return 'RFUNCTION';
"number"                    return 'RNUMBER';
"string"                    return 'RSTRING';
"boolean"                   return 'RBOOLEAN';
"void"                      return 'RVOID';
"let"                       return 'RLET';
"true"                      return 'RTRUE';
"false"                     return 'RFALSE';
"return"                    return 'RRETURN';
"break"                     return 'RBREAK';
"if"                        return 'RIF';
"else"                      return 'RELSE';
"console.log"               return 'RCONSOLE';
"switch"                    return 'RSWITCH';
"case"                      return 'RCASE';
"default"                   return 'RDEFAULT';
"for"                       return 'RFOR';
"while"                     return 'RWHILE';
"continue"                  return 'RCONTINUE';
"graficar_ts()"             return 'RTS';
"do"                        return 'RDO';


/* simbolos */

":"                             return 'DOSPTS';
";"                             return 'PTCOMA';
","                             return 'COMA';
"{"                             return 'LLAVIZQ';
"}"                             return 'LLAVDER';
"("                             return 'PARIZQ';
")"                             return 'PARDER';
"["                             return 'CORIZQ';
"]"                             return 'CORDER';
"."                             return 'PUNTO';

/* operadores aritmeticos */

"+"                         return 'MAS';
"-"                         return 'MENOS';
"*"                         return 'POR';
"/"                         return 'DIVIDIDO';
"**"                        return 'POTENCIA';
"%"                         return 'MODULO';


/* operadores combinados */

"+="                            return 'O_MAS';
"-="                            return 'O_MENOS';
"*="                            return 'O_POR';
"/="                            return 'O_DIVIDIDO';
"--"                            return 'MENOS_MENOS';
"++"                            return 'MAS_MAS';
"&&"                            return 'AND';
"||"                            return 'OR';

/* CONDICIONALES */

"<="                        return 'MENIGQUE';
">="                        return 'MAYIGQUE';
"=="                        return 'DOBLEIG';
"!="                        return 'NOIG';
"<"                         return 'MENQUE';
">"                         return 'MAYQUE';
"="                         return 'IGUAL';
"!"                         return 'NOT';

/* ESPACIOS EN BLANCO */
[\r\t]+                 {}
\n                      {}

/* expresiones regulares */
\"[^\"]*\"                  return 'CADENA';
\'[^\"]*\'                  return 'CADENA2';
\´[^\"]*\´                  return 'CADENA3';
[0-9]+"."[0-9]+             return 'DECIMAL';
[0-9]+                      return 'ENTERO';
([a-zA-Z])[a-zA-z0-9_]*     return 'IDENTIFICADOR';

[\t\r\n\f] %{/*se ignoran*/%}

<<EOF>>                     return 'EOF';

.                     { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* import para el documento instrucciones.js donde se encuentra las constantes para construir el ast*/
%{
        const TIPO_OPERACION = require('./instrucciones').TiPO_OPERACION;
        const TIPO_VALOR = require('./instrucciones').TiPO_VALOR;
        const instruccionesAPI = require('./instrucciones').InstruccionesAPI;
%}


/* Asociación de operadores y precedencia */

%left 'OR'                          // Menor Precedencia
%left 'AND'
%left 'DOBLEIG', 'NO_IGUAL'
%left 'MAYIGQUE', 'MENIGQUE', 'MENQUE', 'MAYQUE'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left 'POTENCIA'
%right 'NOT'
%left UMENOS
%right 'MAS_MAS' 'MENOS_MENOS' 

%start INICIO

%% /* DEFINICION DE LA GRAMATICA */
INICIO  : instrucciones EOF {
            // se retorna cuando ya termino la lectura
            return $1;
}
;

instrucciones : instrucciones CUERPO {$1.push($2); $$=$1;}
              | CUERPO  {$$=[$1];}
              ;


CUERPO              : DECLARACION                               {$$=$1;}
                    | RCONSOLE PARIZQ EXPRE PARDER PTCOMA       {$$=instruccionesAPI.nuevoConsole($3);}
                    | IF                                        {$$=$1;}
                    | SWITCH                                    {$$=$1;}
                    | WHILE                                     {$$=$1;}
                    | FOR                                       {$$=$1;}
                    | CONTINUE 
                    | RETURN
                    | BREAK
                    | ASIGNACION                                {$$=$1;}
                    | AUMENTO                                   {$$=$1;}
                    | FUNCTION                                  {$$=$1;}
                    | GRAFICARTS                                {$$=$1;}
                    | DOWHILE                                   {$$=$1;}

;

DECLARACION          : RLET IDLISTA PTCOMA      {$$=$2;}
;

IDLISTA              : IDLISTA COMA IDLIST {$1.push($3); $$=$1}
                     | IDLIST  {$$=$1;}
                     ;


IDLIST               :  IDENTIFICADOR DOSPTS TIPO  {$$=instruccionesAPI.nuevoDeclaracion($1,$3);}
                     |  IDENTIFICADOR              {$$=instruccionesAPI.nuevoDeclaracion($1,"indefinido");}
                     |  IDENTIFICADOR DOSPTS TIPO OPERADORES EXPRE   {$$=instruccionesAPI.nuevoAsignacion($1,$3,$5);}
                     |  IDENTIFICADOR OPERADORES EXPRE  {$$=instruccionesAPI.nuevoAsignacion($1,"indefinido",$3);}
                     ;

ASIGNACION           : IDASIGNACION PTCOMA      {$$=$1;}
;

IDASIGNACION         : IDASIGNACION COMA IDSIG      {$1.push($3); $$=$1;}
                     | IDSIG   {$$=$1;}
                     ;


IDSIG                : IDENTIFICADOR DOSPTS TIPO                        {$$=instruccionesAPI.nuevoDeclaracion($1,$3);}
                     | IDENTIFICADOR                                    {$$=instruccionesAPI.nuevoDeclaracion($1,"indefinido");}
                     | IDENTIFICADOR DOSPTS TIPO OPERADORES EXPRE       {$$=instruccionesAPI. nuevoAsignacionSimplificada($1,$3,$4,$5);}
                     | IDENTIFICADOR OPERADORES EXPRE                   {$$=instruccionesAPI. nuevoAsignacionSimplificada($1,"any",$2,$3);}
                     ;

AUMENTO              : IDENTIFICADOR MAS MAS PTCOMA                     {$$=instruccionesAPI.nuevoAumento($1,$2);}
                     | IDENTIFICADOR MENOS MENOS PTCOMA                 {$$=instruccionesAPI.nuevoAumento($1,$2);}
                     ;



TIPO                 : RSTRING {$$=$1;}
                     | RNUMBER {$$=$1;}
                     | RBOOLEAN {$$=$1;}
                     ;

ASIGNAR_EXPRESION    : IGUAL EXPRE {$$=$2;}
;

OPERADORES           : IGUAL                {$$=instruccionesAPI.nuevoOperador($1);}
                     | MAS IGUAL            {$$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.SUMA);}
                     | MENOS IGUAL          {$$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.RESTA);}
                     | POR IGUAL            {$$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.MULTIPLICACION);}
                     | DIVIDIDO IGUAL       {$$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.DIVISION);}
                     ;

EXPRE                : EXPRE MAS EXPRE          {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.SUMA);}
                     | EXPRE MENOS EXPRE        {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.RESTA);}
                     | EXPRE POR EXPRE          {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MULTIPLICACION);}
                     | EXPRE DIVIDIDO EXPRE     {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.DIVISION);}
                     | EXPRE MAYQUE EXPRE       {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MAYOR_QUE);}
                     | EXPRE MENQUE EXPRE       {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MENOR_QUE);}
                     | EXPRE MAYIGQUE EXPRE     {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MAYOR_IGUAL);}
                     | EXPRE MENIGQUE EXPRE     {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MENOR_IGUAL);}
                     | EXPRE DOBLEIG EXPRE      {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.DOBLE_IGUAL);}
                     | EXPRE NOIG EXPRE         {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.NO_IGUAL);}
                     | EXPRE AND EXPRE          {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.AND);}
                     | EXPRE OR EXPRE           {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.OR);}
                     | EXPRE MODULO EXPRE       {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.MODULO);}
                     | EXPRE POTENCIA EXPRE     {$$=instruccionesAPI.nuevoOperacionBinaria($1,$3,TIPO_OPERACION.POTENCIA);}
                     | MENOS EXPRE %prec UMENOS {$$=instruccionesAPI.nuevoOperacionUnaria($2,TIPO_OPERACION.NEGATIVO);}
                     | PARIZQ EXPRE PARDER      {$$=$2;}
                     | NOT EXPRE                {$$=instruccionesAPI.nuevoOperacionUnaria($2,TIPO_OPERACION.NOT);}
                     | ENTERO                   {$$=instruccionesAPI.nuevoValor(Number($1),TIPO_VALOR.ENTERO);}
                     | IDENTIFICADOR            {$$=instruccionesAPI.nuevoValor($1,TIPO_VALOR.IDENTIFICADOR);}
                     | CADENA                   {$$=instruccionesAPI.nuevoValor($1,TIPO_VALOR.CADENA);}
                     | CADENA2                  {$$=instruccionesAPI.nuevoValor($1,TIPO_VALOR.CADENA);}
                     | CADENA3                  {$$=instruccionesAPI.nuevoValor($1,TIPO_VALOR.CADENA);}
                     ;

IF                   : RIF PARIZQ CONDICION PARDER LLAVIZQ instrucciones LLAVDER                               {$$=instruccionesAPI.nuevoIf($3,$6);}
                     | RIF PARIZQ CONDICION PARDER LLAVIZQ instrucciones LLAVDER RELSE IF                      {$$=instruccionesAPI.nuevoIfElse($3,$6,$9);}
                     | RIF PARIZQ CONDICION PARDER LLAVIZQ instrucciones LLAVDER RELSE LLAVIZQ instrucciones LLAVDER  {$$=instruccionesAPI.nuevoIfElse($3,$6,$10);}
                     ;
                
//LLEVA PRODUCCION DE ERROR
CONDICION            : EXPRE {$$=$1;}
;

SWITCH               : RSWITCH PARIZQ CONDICION PARDER LLAVIZQ CASOS LLAVDER {$$=instruccionesAPI.nuevoSwitch($3,$6);}
;

CASOS                : CASOS CASO_EVALUAR {$1.push($2); $$=$1;}
                     | CASO_EVALUAR             {$$=instruccionesAPI.nuevoListaCasos($1);}
                     ;

CASO_EVALUAR         : RCASE EXPRE DOSPTS instrucciones       {$$=instruccionesAPI.nuevoCaso($2,$4);}
                     | RDEFAULT DOSPTS instrucciones           {$$=instruccionesAPI.nuevoCasoDef($3);}
                     ;

WHILE                : RWHILE PARIZQ CONDICION PARDER LLAVIZQ instrucciones LLAVDER    {$$=instruccionesAPI.nuevoWhile($3,$6);}
;

BREAK               : RBREAK PTCOMA
;

CONTINUE            : RCONTINUE PTCOMA
;

FOR                 : RFOR PARIZQ RLET IDENTIFICADOR DOSPTS TIPO ASIGNAR_EXPRESION PTCOMA EXPRE PTCOMA ITERADOR PARDER LLAVIZQ instrucciones LLAVDER {$$=instruccionesAPI.nuevoFor($4,$6,$7,$9,$11,$14);}
                    | RFOR PARIZQ RLET IDENTIFICADOR ASIGNAR_EXPRESION PTCOMA EXPRE PTCOMA ITERADOR PARDER LLAVIZQ instrucciones LLAVDER                    {$$=instruccionesAPI.nuevoFor($4,"no",$5,$7,$9,$12);}    
                    | RFOR PARIZQ IDENTIFICADOR ASIGNAR_EXPRESION PTCOMA EXPRE PTCOMA ITERADOR PARDER LLAVIZQ instrucciones LLAVDER                         {$$=instruccionesAPI.nuevoFor($3,"no",$4,$6,$8,$11);}
                    | RFOR PARIZQ IDENTIFICADOR DOSPTS TIPO ASIGNAR_EXPRESION PTCOMA EXPRE PTCOMA ITERADOR PARDER LLAVIZQ instrucciones LLAVDER             {$$=instruccionesAPI.nuevoFor($3,$5,$6,$8,$10,$13);}
;

ITERADOR             : IDENTIFICADOR MAS MAS            {$$=instruccionesAPI.nuevoIterador($1,$2);}
                     | IDENTIFICADOR MENOS MENOS        {$$=instruccionesAPI.nuevoIterador($1,$2);}
                     ;

FUNCTION             : RFUNCTION IDENTIFICADOR PARIZQ PARAMETROS PARDER TIPO_RETORNO LLAVIZQ instrucciones LLAVDER {$$=instruccionesAPI.nuevoFuncion($2,$4,$6,$8);}
                     | RFUNCTION IDENTIFICADOR PARIZQ PARDER TIPO_RETORNO LLAVIZQ instrucciones LLAVDER             {$$=instruccionesAPI.nuevoFuncion($2, "vacio",$5,$7);}
                     | RFUNCTION IDENTIFICADOR PARIZQ PARAMETROS PARDER LLAVIZQ instrucciones LLAVDER               {$$=instruccionesAPI.nuevoFuncion($2,$4,"vacio",$7);}
                     | RFUNCTION IDENTIFICADOR PARIZQ PARDER LLAVIZQ instrucciones LLAVDER                          {$$=instruccionesAPI.nuevoFuncion($2,"vacio","vacio",$6);}
;

TIPO_RETORNO         : DOSPTS RVOID     {$$=$2;}
                     | DOSPTS RSTRING   {$$=$2;}
                     | DOSPTS RNUMBER   {$$=$2;}
                     | DOSPTS RBOOLEAN  {$$=$2;}
                     ;

PARAMETROS           : PARASIG {$$=$1;}
;

RETURN               : RRETURN PTCOMA
                     | RRETURN EXPRE PTCOMA
                     ;

PARASIG              : PARASIG COMA LIASIG       {$1.push($3); $$=$1;}
                     | LIASIG                    {$$=$1;}
                     ;

LIASIG               : IDENTIFICADOR DOSPTS TIPO                        {$$=instruccionesAPI.nuevoDeclaracion($1,$3);}
                     | IDENTIFICADOR                                    {$$=instruccionesAPI.nuevoDeclaracion($1,"indefinido");}
                     ;
GRAFICARTS           : RTS  PTCOMA       {$$=instruccionesAPI.nuevoGraficar($1);}
;

DOWHILE              : RDO LLAVIZQ instrucciones LLAVDER RWHILE PARIZQ EXPRE PARDER PTCOMA  {$$=instruccionesAPI.nuevoDoWhile($3,$7);}
                     ;
