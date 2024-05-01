// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-11)");
  if (respuesta == "1") {
    primerPregunta();
  }
  else if (respuesta == "2") {
    esPar()
  }
  else {
    console.log("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
  menudeEjercicios();
}

menudeEjercicios();

// TAREA 1
// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

function primerPregunta() {
  let respuesta = prompt("¿Eres bellísimo/a?");
  if (respuesta.toLowerCase() == "si") {
    console.log("Ciertamente");
  } else if (respuesta.toLowerCase() == "no") {
    console.log("No te creo");
  } else {
    console.log("Perdón, no entendí tu respuesta");
    primerPregunta();
  }
}

// TAREA 2
// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

function esPar() {
    let numero = prompt("Dame un número");
    if (isNaN(numero)){
        alert("Parece que no ingresaste un número");
        esPar();
    }
    else {
        if (numero%2 == 0) {
            alert(numero + " es divisible entre 2");
        }
        else {
            alert(numero + " no es divisible entre 2");
        }
    }
    
}