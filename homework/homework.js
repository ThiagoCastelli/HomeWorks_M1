'use strict';

function BinarioADecimal(num) {

   let decimal = 0;
   let power = 0;
   for (let i = num.length - 1; i >= 0; i--) {
     decimal += num[i] * Math.pow(2, power);
   power++;
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = '';
   let resultado = num;

   while (resultado > 0) {
      binario = (resultado % 2) + binario;
      resultado = Math.floor(resultado / 2);
   };
   
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

// Otra formas

// function BinarioADecimal(num) {

// num = num.split('').reverse()
// var suma = 0;

// for(var i = 0; i < num.length; i++) {
//    suma += num[i]*2**i
// }

// }
// -------------------------
// Otra forma


// function DecimalABinario(num) {
//    var binario = [];
   

//    while (num !== 0) {
//       binario.unshift(num % 2)
//       num = Math.floor(num / 2);
//    };
   
//    return binario.join('')
// }