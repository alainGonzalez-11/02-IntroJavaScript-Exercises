function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    multiplosDeCinco();
  } else if (respuesta == "2") {
    alert("Función no soportada");
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
    index=5;
    while (index<=limite) {
        console.log(index);
        index = index + 5;
    }
}