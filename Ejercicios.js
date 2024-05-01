// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-11)");
  if (respuesta == "1") {
    primerPregunta();
  } else {
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
