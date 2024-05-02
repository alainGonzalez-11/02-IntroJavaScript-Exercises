function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    randomGenerator(10);
  } else if (respuesta == "2") {
    separador();
  } else if (respuesta == "3") {
    alert("Aún no soportado");
    menudeEjercicios();
  } else {
    alert("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
}

menudeEjercicios();


// TAREA 1
// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

function randomGenerator(numero) {
  let arreglo = [];
  for (let i = 0; i < numero; i++) {
    arreglo.push(Math.random());
  }
  console.log(arreglo);
  return null;
}


// TAREA 2
// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
function separador() {
    let palabras = prompt("Ingresa palabras separadas por coma");
    const arreglo = palabras.split(",");
    console.log(arreglo);
    return null;
  }



