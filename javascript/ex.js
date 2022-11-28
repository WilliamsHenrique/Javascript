/*      1. Resolva as Operações : 
10 + 15 = 25 / Number
"10" + 2 = 102 / String / Number
"10" * 2 = 20 / String / Number
"10" / 2 = 5 / String / Number
"10" % 3 = 1 / String / Number
10 + true = 11 / Number / Boolean
10 == "10" = true / Number / String
10 < 11 = true / Number / Number
10 > 12 = false / Number / Number
10 <= 10.1 = true / Number / Number
10 > 9.99 = true / Number / Number
10 != "dez" = true / Number / String
10 + true = 11 / number / Boolean
"dez" + true = deztrue / String / Boolean
10 + false = 10 / Number / Boolean
10 * false = 0 / Number / Boolean
true + true = 2 / Boolean / Boolean
10 ++ =
10 -- =
1 & 1 = 1 / Number / Number
1 & 0 = 0 / Number / Number
0 & 0 = 0 / Number / Number
1 & 0 = 0 / Number / Number
0 / 1 = 0 / Number / Number
5 + 5 == 10 = true / Number / Number
"5" + "5" == 10 = false / String / String
"5" * 2 > 9 = true / String / Number
(10 + 10) * 2 = 40 / Number / Number
10 + 10 * 2 = 30 / Number / Number
*/

//      2. Responda as perguntas de acordo com as variáveis.

 var branco = "preto";
 var preto = "cinza";
 var cinza = "branco";
 var carro = "preto";
 var valor = 30000;
 var prestacao = 750;
 var cavalo = carro == "preto" ? "cinza" :"marron"


//  a ) branco == "branco" / false /
//  b ) branco == cinza / false /
//  c ) carro === branco / true /
//  d ) var cavalo = carro == "preto" ? "cinza" : "marron"; / true / false / false
//  e ) Quantas prestações são necessárias para pagar o valor do carro com entrada de 3.000? Demonstre a operação.  
  var valor = 30000;
  var prestacao = 750;
  console.log((valor - 3000) / prestacao);
  36 prestações
//  f ) Somando as variáveis de cores é formada uma string de quantos caracteres?
  var cor = branco + preto + cinza + carro;
  console.log(cor);
  console.log(cor.length);
  pretocinzabrancopreto
  21 
 
