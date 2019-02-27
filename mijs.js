function main(){

  var boton1 = document.getElementById('boton 1');
  var boton2 = document.getElementById('boton 2');
  var boton3 = document.getElementById('boton 3');
  var boton4 = document.getElementById('boton 4');
  var boton5 = document.getElementById('boton 5');
  var boton6 = document.getElementById('boton 6');
  var boton7 = document.getElementById('boton 7');
  var boton8 = document.getElementById('boton 8');
  var boton9 = document.getElementById('boton 9');
  var boton0 = document.getElementById('boton 0');
  var botonmas = document.getElementById('boton +');
  var botonmenos = document.getElementById('boton -');
  var botonmul = document.getElementById('boton *');
  var botondiv = document.getElementById('boton /');
  var botonpunt = document.getElementById('boton .');
  var botonigual = document.getElementById('boton =');


  var display = document.getElementById('display');

  var op1 = null;
  var op2 = null;
  var operacion = null;
  var resultado = null;


  boton1.onclick = () => {
    display.innerHTML = display.innerHTML + "1";
  }

  boton2.onclick = () => {
    display.innerHTML = display.innerHTML + "2";
  }

  boton3.onclick = () => {
    display.innerHTML = display.innerHTML + "3";
  }

  boton4.onclick = () => {
    display.innerHTML = display.innerHTML + "4";
  }

  boton5.onclick = () => {
    display.innerHTML = display.innerHTML + "5";
  }

  boton6.onclick = () => {
    display.innerHTML = display.innerHTML + "6";
  }

  boton7.onclick = () => {
    display.innerHTML = display.innerHTML + "7";
  }

  boton8.onclick = () => {
    display.innerHTML = display.innerHTML + "8";
  }

  boton9.onclick = () => {
    display.innerHTML = display.innerHTML + "9";
  }

  boton0.onclick = () => {
    display.innerHTML = display.innerHTML + "0";
  }

  botonpunt.onclick = () => {
    display.innerHTML = display.innerHTML + ".";
  }

  botonmas.onclick = () => {
    op1 = display.innerHTML;
    if (display.innerHTML.includes("+")){
      display.innerHTML;
    }else{
      display.innerHTML = display.innerHTML + "+";
    }
  }

  botonigual.onclick = () => {
    operacion = display.innerHTML;
    if (operacion.includes("+")){
      op2 = operacion.split("+")[1]
      resultado = parseFloat(op1) + parseFloat(op2);
    }
    display.innerHTML = resultado;
  }


}
