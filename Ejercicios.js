function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-11)");
  if (respuesta == "1") {
    primerPregunta();
  } else if (respuesta == "2" || respuesta == "3") {
    esPar();
  } else if (respuesta == "4") {
    premio();
  } else if (respuesta == "5") {
    comparaNumeros();
  } else if (respuesta == "6") {
    comparaTresNumeros();
  } else if (respuesta == "7") {
    evaluaDiasSemana();
  } else {
    alert("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
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

// TAREA 5
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

function comparaNumeros() {
  let numero1 = prompt("Ingresa un número");
  let numero2 = prompt("Ingresa otro número");
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Parece que no ingresaste un número");
    comparaNumeros();
  } else {
    if (numero1 > numero2) {
      alert(numero1 + " es mayor que " + numero2);
    } else {
      alert(numero1 + " es menor que " + numero2);
    }
  }
}

// TAREA 6
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

function comparaTresNumeros() {
  let numero1 = prompt("Ingresa un número");
  let numero2 = prompt("Ingresa otro número");
  let numero3 = prompt("Ingresa un tercer número");
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Parece que no ingresaste un número");
    comparaNumeros();
  } else {
    if (numero1 >= numero2 && numero1 >= numero3) {
      alert(numero1 + "es el número mas grande que ingresaste");
    } else if (numero2 >= numero1 && numero2 >= numero3) {
      alert(numero2 + "es el número mas grande que ingresaste");
    } else {
      alert(numero3 + "es el número mas grande que ingresaste");
    }
  }
}

// TAREA 7
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
function evaluaDiasSemana() {
  let dia = prompt("Ingresa un día de la semana");
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("Feliz inicio de semana");
      break;
    case "viernes":
      alert("Ya se acabó la semana");
      break;
    case "sábado":
    case "sabado":
    case "domingo":
      alert("Disfruta tu fin de semana");
      break;
      case "martes":
      case "miercoles":
        case "miércoles":
      case "jueves":
        alert("Otro día, otro dolar");
        break;
    default:
      alert("No ingresaste un día de la semana");
      break;
  }
}
