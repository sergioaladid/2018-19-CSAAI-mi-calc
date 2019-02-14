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


  boton1.onclick = () => {
    console.log("1");

    var txt = '1';
    var numeros = txt.length;
    var display = document.getElementById('display');
    display.innerHTML = "1";
  }
  boton2.onclick = () => {
    console.log("2");

    var txt = '2';
    var numeros = txt.length;
    var display = document.getElementById('display');
    display.innerHTML = "2";
  }

}
