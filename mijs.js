function main(){

  console.log("hola mundo");

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

  var display = document.getElementById('display');


  boton1.onclick = () => {
    console.log("1");

    var numero1 = "1";
    display.innerHTML = numero1;
  }
  boton2.onclick = () => {
    console.log("2");

    var numero2 = "2";
    display.innerHTML = numero2;
  }
  boton3.onclick = () => {
    console.log("3");

    var numero3 = "3";
    display.innerHTML = numero3;
  }
  boton4.onclick = () => {
    console.log("4");

    var numero4 = "4";
    display.innerHTML = numero4;
  }
  boton5.onclick = () => {
    console.log("5");

    var numero5 = "5";
    display.innerHTML = numero5;
  }
  boton6.onclick = () => {
    console.log("6");

    var numero6 = "6";
    display.innerHTML = numero6;
  }
}
