function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    randomGenerator(10);
  } else if (respuesta == "2") {
    separador();
  } else if (respuesta == "3") {
    analizaNumeros([10,40,30,20,15,5])
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


// TAREA 3
// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
function analizaNumeros(arreglo) {
    console.log(arreglo.sort(function(a, b){return a - b}));
    console.log('El número más pequeño es ' + Math.min.apply(null, arreglo));
    console.log('El número más grande es ' + Math.max.apply(null, arreglo));
    
    return null;
  }
