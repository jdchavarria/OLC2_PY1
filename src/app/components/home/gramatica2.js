/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica2 = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,13],$V2=[1,20],$V3=[1,14],$V4=[1,15],$V5=[1,16],$V6=[1,18],$V7=[1,17],$V8=[5,8,20,24,50,53,55,61,63,64],$V9=[5,8,20,24,50,53,55,58,60,61,62,63,64],$Va=[1,27],$Vb=[12,22],$Vc=[2,24],$Vd=[1,37],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,43],$Vi=[1,46],$Vj=[1,44],$Vk=[1,45],$Vl=[1,47],$Vm=[1,52],$Vn=[1,53],$Vo=[1,63],$Vp=[1,65],$Vq=[1,67],$Vr=[1,68],$Vs=[1,69],$Vt=[9,24,47,48,49],$Vu=[1,74],$Vv=[1,75],$Vw=[1,76],$Vx=[1,77],$Vy=[1,78],$Vz=[1,79],$VA=[1,80],$VB=[1,81],$VC=[1,82],$VD=[1,83],$VE=[1,84],$VF=[1,85],$VG=[11,12,22,25,30,31,37,38,39,40,41,42,43,44,45,46],$VH=[1,97],$VI=[12,22,30,31,36,37,38],$VJ=[11,12,22,25],$VK=[11,12,22,25,30,31],$VL=[11,12,22,25,30,31,37,38],$VM=[1,129],$VN=[1,130],$VO=[53,58,60],$VP=[1,152];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"instrucciones":4,"EOF":5,"CUERPO":6,"DECLARACION":7,"RCONSOLE":8,"PARIZQ":9,"EXPRE":10,"PARDER":11,"PTCOMA":12,"IF":13,"SWITCH":14,"WHILE":15,"FOR":16,"CONTINUE":17,"ASIGNACION":18,"AUMENTO":19,"RLET":20,"IDLISTA":21,"COMA":22,"IDLIST":23,"IDENTIFICADOR":24,"DOSPTS":25,"TIPO":26,"OPERADORES":27,"IDASIGNACION":28,"IDSIG":29,"MAS":30,"MENOS":31,"RSTRING":32,"RNUMBER":33,"RBOOLEAN":34,"ASIGNAR_EXPRESION":35,"IGUAL":36,"POR":37,"DIVIDIDO":38,"MAYQUE":39,"MENQUE":40,"MAYIGQUE":41,"MENIGQUE":42,"DOBLEIG":43,"NOIG":44,"AND":45,"OR":46,"NOT":47,"ENTERO":48,"CADENA":49,"RIF":50,"CONDICION":51,"LLAVIZQ":52,"LLAVDER":53,"RELSE":54,"RSWITCH":55,"CASOS":56,"CASO_EVALUAR":57,"RCASE":58,"BREAK":59,"RDEFAULT":60,"RWHILE":61,"RBREAK":62,"RCONTINUE":63,"RFOR":64,"ITERADOR":65,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"RCONSOLE",9:"PARIZQ",11:"PARDER",12:"PTCOMA",20:"RLET",22:"COMA",24:"IDENTIFICADOR",25:"DOSPTS",30:"MAS",31:"MENOS",32:"RSTRING",33:"RNUMBER",34:"RBOOLEAN",36:"IGUAL",37:"POR",38:"DIVIDIDO",39:"MAYQUE",40:"MENQUE",41:"MAYIGQUE",42:"MENIGQUE",43:"DOBLEIG",44:"NOIG",45:"AND",46:"OR",47:"NOT",48:"ENTERO",49:"CADENA",50:"RIF",52:"LLAVIZQ",53:"LLAVDER",54:"RELSE",55:"RSWITCH",58:"RCASE",60:"RDEFAULT",61:"RWHILE",62:"RBREAK",63:"RCONTINUE",64:"RFOR"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,5],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,3],[21,3],[21,1],[23,3],[23,1],[23,5],[23,3],[18,2],[28,3],[28,1],[29,3],[29,1],[29,5],[29,3],[19,4],[19,4],[26,1],[26,1],[26,1],[35,2],[27,1],[27,2],[27,2],[27,2],[27,2],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[10,1],[10,1],[13,7],[13,9],[13,11],[51,1],[14,7],[56,2],[56,1],[57,5],[57,3],[15,7],[59,2],[17,2],[16,15],[16,13],[16,12],[16,14],[65,3],[65,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            // se retorna cuando ya termino la lectura
            return $$[$0-1];

break;
case 2: case 60:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3:
this.$=[$$[$0]];
break;
case 4: case 6: case 7: case 8: case 9: case 11: case 12: case 15: case 22: case 29: case 30: case 31: case 32: case 58:
this.$=$$[$0];
break;
case 5:
this.$=instruccionesAPI.nuevoConsole($$[$0-2]);
break;
case 13: case 20: case 50:
this.$=$$[$0-1];
break;
case 14:
$$[$0-2].push($$[$0]); this.$=$$[$0-2]
break;
case 16: case 23:
this.$=instruccionesAPI.nuevoDeclaracion($$[$0-2],$$[$0]);
break;
case 17: case 24:
this.$=instruccionesAPI.nuevoDeclaracion($$[$0],"indefinido");
break;
case 18:
this.$=instruccionesAPI.nuevoAsignacion($$[$0-4],$$[$0-2],$$[$0]);
break;
case 19:
this.$=instruccionesAPI.nuevoAsignacion($$[$0-2],"indefinido",$$[$0]);
break;
case 21:
$$[$0-2].push($$[$0]); this.$=$$[$0-2];
break;
case 25:
this.$=instruccionesAPI. nuevoAsignacionSimplificada($$[$0-4],$$[$0-2],$$[$0-1],$$[$0]);
break;
case 26:
this.$=instruccionesAPI. nuevoAsignacionSimplificada($$[$0-2],"any",$$[$0-1],$$[$0]);
break;
case 27: case 28:
this.$=instruccionesAPI.nuevoAumento($$[$0-3],$$[$0-2]);
break;
case 33:
this.$=instruccionesAPI.nuevoOperador($$[$0]);
break;
case 34:
this.$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.SUMA);
break;
case 35:
this.$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.RESTA);
break;
case 36:
this.$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.MULTIPLICACION);
break;
case 37:
this.$=instruccionesAPI.nuevoOperador(TIPO_OPERACION.DIVISION);
break;
case 38:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.SUMA);
break;
case 39:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.RESTA);
break;
case 40:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.MULTIPLICACION);
break;
case 41:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.DIVISION);
break;
case 42:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.MAYOR_QUE);
break;
case 43:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.MENOR_QUE);
break;
case 44:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.MAYOR_IGUAL);
break;
case 45:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.MENOR_IGUAL);
break;
case 46:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.DOBLE_IGUAL);
break;
case 47:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.NO_IGUAL);
break;
case 48:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.AND);
break;
case 49:
this.$=instruccionesAPI.nuevoOperacionBinaria($$[$0-2],$$[$0],TIPO_OPERACION.OR);
break;
case 51:
this.$=instruccionesAPI.nuevoOperacionUnaria($$[$0],TIPO_OPERACION.NOT);
break;
case 52:
this.$=instruccionesAPI.nuevoValor(Number($$[$0]),TIPO_VALOR.ENTERO);
break;
case 53:
this.$=instruccionesAPI.nuevoValor($$[$0],TIPO_VALOR.IDENTIFICADOR);
break;
case 54:
this.$=instruccionesAPI.nuevoValor($$[$0],TIPO_VALOR.CADENA);
break;
case 55:
this.$=instruccionesAPI.nuevoIf($$[$0-4],$$[$0-1]);
break;
case 56:
this.$=instruccionesAPI.nuevoIfElse($$[$0-6],$$[$0-3],$$[$0]);
break;
case 57:
this.$=instruccionesAPI.nuevoIfElse($$[$0-8],$$[$0-5],$$[$0-1]);
break;
case 59:
this.$=instruccionesAPI.nuevoSwitch($$[$0-4],$$[$0-1]);
break;
case 61:
this.$=instruccionesAPI.nuevoListaCasos($$[$0]);
break;
case 62:
this.$=instruccionesAPI.nuevoCaso($$[$0-3],$$[$0-1]);
break;
case 63:
this.$=instruccionesAPI.nuevoCasoDef($$[$0]);
break;
case 64:
this.$=instruccionesAPI.nuevoWhile($$[$0-4],$$[$0-1]);
break;
case 67: case 70:
this.$=instruccionesAPI.nuevoFor($$[$0-11],$$[$0-9],$$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1]);
break;
case 68: case 69:
this.$=instruccionesAPI.nuevoFor($$[$0-9],"no",$$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1]);
break;
case 71: case 72:
this.$=instruccionesAPI.nuevoIterador($$[$0-2],$$[$0-1]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{1:[3]},{5:[1,22],6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},o($V8,[2,3]),o($V9,[2,4]),{9:[1,24]},o($V9,[2,6]),o($V9,[2,7]),o($V9,[2,8]),o($V9,[2,9]),o($V9,[2,10]),o($V9,[2,11]),o($V9,[2,12]),{21:25,23:26,24:$Va},{9:[1,28]},{9:[1,29]},{9:[1,30]},{9:[1,31]},{12:[1,32]},{12:[1,33],22:[1,34]},o($Vb,$Vc,{27:38,25:$Vd,30:[1,35],31:[1,36],36:$Ve,37:$Vf,38:$Vg}),o($Vb,[2,22]),{1:[2,1]},o($V8,[2,2]),{9:$Vh,10:42,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{12:[1,48],22:[1,49]},o($Vb,[2,15]),o($Vb,[2,17],{27:51,25:[1,50],30:$Vm,31:$Vn,36:$Ve,37:$Vf,38:$Vg}),{9:$Vh,10:55,24:$Vi,47:$Vj,48:$Vk,49:$Vl,51:54},{9:$Vh,10:55,24:$Vi,47:$Vj,48:$Vk,49:$Vl,51:56},{9:$Vh,10:55,24:$Vi,47:$Vj,48:$Vk,49:$Vl,51:57},{20:[1,58],24:[1,59]},o($V9,[2,66]),o($V9,[2,20]),{24:[1,61],29:60},{30:[1,62],36:$Vo},{31:[1,64],36:$Vp},{26:66,32:$Vq,33:$Vr,34:$Vs},{9:$Vh,10:70,24:$Vi,47:$Vj,48:$Vk,49:$Vl},o($Vt,[2,33]),{36:[1,71]},{36:[1,72]},{11:[1,73],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{9:$Vh,10:86,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:87,24:$Vi,47:$Vj,48:$Vk,49:$Vl},o($VG,[2,52]),o($VG,[2,53]),o($VG,[2,54]),o($V9,[2,13]),{23:88,24:$Va},{26:89,32:$Vq,33:$Vr,34:$Vs},{9:$Vh,10:90,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{36:$Vo},{36:$Vp},{11:[1,91]},{11:[2,58],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{11:[1,92]},{11:[1,93]},{24:[1,94]},{25:[1,96],35:95,36:$VH},o($Vb,[2,21]),o($Vb,$Vc,{27:38,25:$Vd,30:$Vm,31:$Vn,36:$Ve,37:$Vf,38:$Vg}),{12:[1,98]},o($Vt,[2,34]),{12:[1,99]},o($Vt,[2,35]),o($Vb,[2,23],{27:100,30:$Vm,31:$Vn,36:$Ve,37:$Vf,38:$Vg}),o($VI,[2,29]),o($VI,[2,30]),o($VI,[2,31]),o($Vb,[2,26],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($Vt,[2,36]),o($Vt,[2,37]),{12:[1,101]},{9:$Vh,10:102,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:103,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:104,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:105,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:106,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:107,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:108,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:109,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:110,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:111,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:112,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{9:$Vh,10:113,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{11:[1,114],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},o($VJ,[2,51],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($Vb,[2,14]),o($Vb,[2,16],{27:115,30:$Vm,31:$Vn,36:$Ve,37:$Vf,38:$Vg}),o($Vb,[2,19],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),{52:[1,116]},{52:[1,117]},{52:[1,118]},{25:[1,119],35:120,36:$VH},{12:[1,121]},{26:122,32:$Vq,33:$Vr,34:$Vs},{9:$Vh,10:123,24:$Vi,47:$Vj,48:$Vk,49:$Vl},o($V9,[2,27]),o($V9,[2,28]),{9:$Vh,10:124,24:$Vi,47:$Vj,48:$Vk,49:$Vl},o($V9,[2,5]),o($VK,[2,38],{37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VK,[2,39],{37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VL,[2,40],{39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VL,[2,41],{39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,42],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,43],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,44],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,45],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,46],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,47],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,48],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VJ,[2,49],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($VG,[2,50]),{9:$Vh,10:125,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{4:126,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{56:127,57:128,58:$VM,60:$VN},{4:131,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{26:132,32:$Vq,33:$Vr,34:$Vs},{12:[1,133]},{9:$Vh,10:134,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{35:135,36:$VH},{12:[2,32],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},o($Vb,[2,25],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),o($Vb,[2,18],{30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF}),{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,136],55:$V4,61:$V5,63:$V6,64:$V7},{53:[1,137],57:138,58:$VM,60:$VN},o($VO,[2,61]),{9:$Vh,10:139,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{25:[1,140]},{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,141],55:$V4,61:$V5,63:$V6,64:$V7},{35:142,36:$VH},{9:$Vh,10:143,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{12:[1,144],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{12:[1,145]},o($V9,[2,55],{54:[1,146]}),o($V9,[2,59]),o($VO,[2,60]),{25:[1,147],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{6:148,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},o($V9,[2,64]),{12:[1,149]},{12:[1,150],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{24:$VP,65:151},{9:$Vh,10:153,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{13:154,50:$V3,52:[1,155]},{6:156,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},o($VO,[2,63]),{9:$Vh,10:157,24:$Vi,47:$Vj,48:$Vk,49:$Vl},{24:$VP,65:158},{11:[1,159]},{30:[1,160],31:[1,161]},{12:[1,162],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},o($V9,[2,56]),{4:163,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{59:164,62:[1,165]},{12:[1,166],30:$Vu,31:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,43:$VC,44:$VD,45:$VE,46:$VF},{11:[1,167]},{52:[1,168]},{30:[1,169]},{31:[1,170]},{24:$VP,65:171},{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,172],55:$V4,61:$V5,63:$V6,64:$V7},o($VO,[2,62]),{12:[1,173]},{24:$VP,65:174},{52:[1,175]},{4:176,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{11:[2,71]},{11:[2,72]},{11:[1,177]},o($V9,[2,57]),o($VO,[2,65]),{11:[1,178]},{4:179,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,180],55:$V4,61:$V5,63:$V6,64:$V7},{52:[1,181]},{52:[1,182]},{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,183],55:$V4,61:$V5,63:$V6,64:$V7},o($V9,[2,69]),{4:184,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},{4:185,6:3,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,55:$V4,61:$V5,63:$V6,64:$V7},o($V9,[2,68]),{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,186],55:$V4,61:$V5,63:$V6,64:$V7},{6:23,7:4,8:$V0,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:$V1,24:$V2,28:19,29:21,50:$V3,53:[1,187],55:$V4,61:$V5,63:$V6,64:$V7},o($V9,[2,70]),o($V9,[2,67])],
defaultActions: {22:[2,1],169:[2,71],170:[2,72]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

        const TIPO_OPERACION = require('./instrucciones').TIPO_OPERACION;
        const TIPO_VALOR = require('./instrucciones').TIPO_VALOR;
        const instruccionesAPI = require('./instrucciones').instruccionesAPI;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://se ignoran espacios en blanco
break;
case 1://se ignoran comentarios de una linea
break;
case 2://comentario multilinea
break;
case 3:return 20;
break;
case 4:return 'RFUNCTION';
break;
case 5:return 33;
break;
case 6:return 32;
break;
case 7:return 34;
break;
case 8:return 'RVOID';
break;
case 9:return 20;
break;
case 10:return 'RTRUE';
break;
case 11:return 'RFALSE';
break;
case 12:return 'RRETURN';
break;
case 13:return 62;
break;
case 14:return 50;
break;
case 15:return 54;
break;
case 16:return 8;
break;
case 17:return 55;
break;
case 18:return 58;
break;
case 19:return 60;
break;
case 20:return 64;
break;
case 21:return 61;
break;
case 22:return 63;
break;
case 23:return 25;
break;
case 24:return 12;
break;
case 25:return 22;
break;
case 26:return 52;
break;
case 27:return 53;
break;
case 28:return 9;
break;
case 29:return 11;
break;
case 30:return 'CORIZQ';
break;
case 31:return 'CORDER';
break;
case 32:return 'PUNTO';
break;
case 33:return 30;
break;
case 34:return 31;
break;
case 35:return 37;
break;
case 36:return 38;
break;
case 37:return 'POTENCIA';
break;
case 38:return 'O_MAS';
break;
case 39:return 'O_MENOS';
break;
case 40:return 'O_POR';
break;
case 41:return 'O_DIVIDIDO';
break;
case 42:return 'MENOS_MENOS';
break;
case 43:return 'MAS_MAS';
break;
case 44:return 45;
break;
case 45:return 46;
break;
case 46:return 42;
break;
case 47:return 41;
break;
case 48:return 43;
break;
case 49:return 44;
break;
case 50:return 40;
break;
case 51:return 39;
break;
case 52:return 36;
break;
case 53:return 47;
break;
case 54:
break;
case 55:
break;
case 56:return 49;
break;
case 57:return 'DECIMAL';
break;
case 58:return 48;
break;
case 59:return 24;
break;
case 60:/*se ignoran*/
break;
case 61:return 5;
break;
case 62: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:let\b)/,/^(?:function\b)/,/^(?:number\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:void\b)/,/^(?:let\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:return\b)/,/^(?:break\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:console\.log\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:for\b)/,/^(?:while\b)/,/^(?:continue\b)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\.)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:--)/,/^(?:\+\+)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:<)/,/^(?:>)/,/^(?:=)/,/^(?:!)/,/^(?:[\r\t]+)/,/^(?:\n)/,/^(?:"[^\"]*")/,/^(?:[0-9]+\.[0-9]+)/,/^(?:[0-9]+)/,/^(?:([a-zA-Z])[a-zA-z0-9_]*)/,/^(?:[\t\r\n\f])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica2;
exports.Parser = gramatica2.Parser;
exports.parse = function () { return gramatica2.parse.apply(gramatica2, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}