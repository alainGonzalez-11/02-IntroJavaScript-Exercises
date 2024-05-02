function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    multiplosDeCinco();
  } else if (respuesta == "2") {
    loteria();
  } else if (respuesta == "3") {
    alert("Función no soportada");
  } else if (respuesta == "4") {
    alert("Función no soportada");
  } else if (respuesta == "5") {
    alert("Función no soportada");
  } else {
    alert("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
}

menudeEjercicios();

// TAREA 1
// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

function multiplosDeCinco() {
  let limite = prompt("Ingresa un número");
  index = 5;
  while (index <= limite) {
    console.log(index);
    index = index + 5;
  }
}

// TAREA 2
// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
function loteria() {
  let respuesta = prompt(
    "Ingresa dos numeros separados por comas entre el 1 y el 50"
  );
  let numeros = respuesta.split(",");
  if (numeros.length !== 2) {
    alert("Lo lamento, necesitamos 2 números");
    loteria();
    return false;
  }
  for (let key in numeros) {
    if (numeros[key] > 50 || numeros[key] < 1) {
      alert("Lo lamento, los números no están en el rango");
      loteria();
      return false;
    }
  }

  index = 1;
  while (index <= 50) {
    if (index == numeros[0] || index == numeros[1]) {
      console.log(index + " ¡¡¡Loteria!!!");
    } else {
      console.log(index);
    }
    index++;
  }
}
