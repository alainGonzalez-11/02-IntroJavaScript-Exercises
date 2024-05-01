function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-11)");
  if (respuesta == "1") {
    primerPregunta();
  } else if (respuesta == "2" || respuesta == "3") {
    esPar();
  } else if (respuesta == "4") {
    premio();
  } else {
    alert("Perdón, no entendí tu respuesta");
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
    alert("Ciertamente");
  } else if (respuesta.toLowerCase() == "no") {
    alert("No te creo");
  } else {
    alert("Perdón, no entendí tu respuesta");
    primerPregunta();
  }
}

// TAREA 2
// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

function esPar() {
  let numero = prompt("Dame un número");
  if (isNaN(numero)) {
    alert("Parece que no ingresaste un número");
    esPar();
  } else {
    if (numero % 2 == 0) {
      alert(numero + " es divisible entre 2");
    } else {
      alert(numero + " no es divisible entre 2");
    }
  }
}

// TAREA 3
// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// Se satisface con la tarea 2

// TAREA 4
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

function premio() {
  let numeroCliente = prompt("Ingresa tu número de cliente");
  if (isNaN(numeroCliente)) {
    alert("Parece que no ingresaste un número");
    premio();
  } else {
    if (numeroCliente == 1000) {
      alert("Ganaste un premio");
    } else {
      alert("Lo sentimos, sigue participando");
    }
  }
}
