/**Números mágicos**

Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

let user = null;
let bot = null;

function play() {
    numeroBot();
    numeroPlayer();
}

function numeroBot() {
  //BOT MathRandom
  return (bot = Math.round(Math.random() * 5));
}

function numeroPlayer() {
  // prompt('Adivine un número del 0 al 5')
  //if usuario alert -> ADIVINO || NO ADIVINO
  //if NO ADIVINO -> alert -> n° ingresado > o < que BOT
  user = parseInt(prompt("Adivine un número del 0 al 5"));
  if (!isNaN(user)) {
    if (user >= 0 && user <= 5) {
      switch (true) {
        case user < bot:
          mensajeAlert("menor");
          break;
        case user > bot:
          mensajeAlert("mayor");
          break;
        case user === bot:
          mensajeAlert("ganaste");
          break;

      }
    } else {
      //Cuando es otro número
      mensajeAlert("invalido");
    }
  } else {
    //Cuando no sea un número
    mensajeAlert("notNumber");
  }
}

function mensajeAlert(resultado) {
    //Devuelve el mensaje del juego en pantalla
    if (resultado === "invalido") {
      swal("ERROR", "Número inválido, ingrese otro", "error");
    }
    if (resultado === "notNumber") {
      swal("ERROR", "Debe ingresar un número válido", "error");
    }
    if (resultado === "ganaste") {
      swal(
        "ADIVINASTE!!",
        `Los dos eligieron ${[bot]}`,
        "success"
      );
    }
    if (resultado === "menor"){
        swal(
            "PERDISTE!!",
            `Tu número es MENOR del bot (${[bot]})`,
            "error"
          );

    }
    if (resultado === "mayor"){
        swal(
            "PERDISTE!!",
            `Tu número es MAYOR que el del bot (${[bot]})`,
            "error"
          );

    }


}