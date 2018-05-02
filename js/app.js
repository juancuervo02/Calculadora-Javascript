num1 = 0;
num2 = 0;
operacion = '';
let resultado = document.getElementById('display')

let calculadora = {

  

  iniciar: function(){
    let uno = document.getElementById('1');
    let dos = document.getElementById('2');
    let tres = document.getElementById('3');
    let cuatro = document.getElementById('4');
    let cinco = document.getElementById('5');
    let seis = document.getElementById('6');
    let siete = document.getElementById('7');
    let ocho = document.getElementById('8');
    let nueve = document.getElementById('9');
    let cero = document.getElementById('0');

    let suma = document.getElementById('mas');
    let resta = document.getElementById('menos');
    let mult = document.getElementById('por');
    let divid = document.getElementById('dividido');
    let igual = document.getElementById('igual');
    let punto = document.getElementById('punto');
    
    let reset = document.getElementById('on');
    let negativo = document.getElementById('sign');

    uno.onmousedown = function(elemento){
      resultado.textContent += '1';
      uno.style.border = '3px outset #000'
    }
    uno.onmouseup = function(elemento){
      uno.style.border = '0 inset #000'
    }

    dos.onmousedown = function(elemento){
      resultado.textContent += '2';
      dos.style.border = '3px outset #000'
    }
    dos.onmouseup = function(elemento){
      dos.style.border = '0 inset #000'
    }

    tres.onmousedown = function(elemento){
      resultado.textContent += '3';
      tres.style.border = '3px outset #000'
    }
    tres.onmouseup = function(elemento){
      tres.style.border = '0 inset #000'
    }

    cuatro.onmousedown = function(elemento){
      resultado.textContent += '4';
      cuatro.style.border = '3px outset #000'
    }
    cuatro.onmouseup = function(elemento){
      cuatro.style.border = '0 inset #000'
    }

    cinco.onmousedown = function(elemento){
      resultado.textContent += '5';
      cinco.style.border = '3px outset #000'
    }
    cinco.onmouseup = function(elemento){
      cinco.style.border = '0 inset #000'
    }

    seis.onmousedown = function(elemento){
      resultado.textContent += '6';
      seis.style.border = '3px outset #000'
    }
    seis.onmouseup = function(elemento){
      seis.style.border = '0 inset #000'
    }

    siete.onmousedown = function(elemento){
      resultado.textContent += '7';
      siete.style.border = '3px outset #000'
    }
    siete.onmouseup = function(elemento){
      siete.style.border = '0 inset #000'
    }

    ocho.onmousedown = function(elemento){
      resultado.textContent += '8';
      ocho.style.border = '3px outset #000'
    }
    ocho.onmouseup = function(elemento){
      ocho.style.border = '0 inset #000'
    }

    nueve.onmousedown = function(elemento){
      resultado.textContent += '9';
      nueve.style.border = '3px outset #000'
    }
    nueve.onmouseup = function(elemento){
      nueve.style.border = '0 inset #000'
    }

    cero.onmousedown = function(elemento){
      resultado.textContent += '0';
      cero.style.border = '3px outset #000'
    }
    cero.onmouseup = function(elemento){
      cero.style.border = '0 inset #000'
    }

    punto.onmousedown = function(elemento){
      resultado.textContent += '.';
      punto.style.border = '3px outset #000'
    }
    punto.onmouseup = function(elemento){
      punto.style.border = '0 inset #000'
    }

    // Negativo
    negativo.onmousedown = function(){
      resultado.textContent = '-' + resultado.textContent;
      negativo.style.border = '3px outset #000'
    }
    negativo.onmouseup = function(elemento){
      negativo.style.border = '0 inset #000'
    }

    // Reiniciar
    reset.onmousedown = function(){      
      num1 = 0;
      num2 = 0;
      resultado.textContent = 0;
      operacion = '';
      reset.style.border = '3px outset #000'
    }
    reset.onmouseup = function(elemento){
      reset.style.border = '0 inset #000'
    }

    // Operaciones
    suma.onmousedown = function(){
      num1 = resultado.textContent;
      operacion = '+';
      limpiar()
      suma.style.border = '3px outset #000'
    }
    suma.onmouseup = function(elemento){
      suma.style.border = '0 inset #000'
    }

    resta.onmousedown = function(){
      num1 = resultado.textContent;
      operacion = '-';
      limpiar();
      resta.style.border = '3px outset #000'
    }
    resta.onmouseup = function(elemento){
      resta.style.border = '0 inset #000'
    }

    mult.onmousedown = function(){
      num1 = resultado.textContent;
      operacion = '*';
      limpiar();
      mult.style.border = '3px outset #000'
    }
    mult.onmouseup = function(elemento){
      mult.style.border = '0 inset #000'
    }

    divid.onmousedown = function(){
      num1 = resultado.textContent;
      operacion = '/';
      limpiar();
      divid.style.border = '3px outset #000'
    }
    divid.onmouseup = function(elemento){
      divid.style.border = '0 inset #000'
    }

    igual.onmousedown = function(){
      num2 = resultado.textContent;
      resolver();
      igual.style.border = '3px outset #000'
    }
    igual.onmouseup = function(elemento){
      igual.style.border = '0 inset #000'
    }

    // limpiar
    function limpiar(){
      resultado.textContent = '';
    }

    function resolver(){      
      limpiar()
      let res = 0;
      switch (this.operacion) {
        case '+':
          res = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          res = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          res = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          res = parseFloat(num1) / parseFloat(num2);
          break;
      }
      resultado.textContent = res;  
    }    
  
    function resetear(){
      num1 = 0;
      num2 = 0;
      resultado.textContent = 0;
      operacion = '';
    }  

  }
}

calculadora.iniciar();
