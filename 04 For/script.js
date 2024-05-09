function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    oddNumbers();
  } else if (respuesta == "2") {
    pokemon();
  } else if (respuesta == "3") {
    checkNumbers();
  } else {
    alert("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
}

menudeEjercicios();

// TAREA 1
// 1. Crea un programa que imprima en consola los números impares del 1 al 50.

function oddNumbers() {
  for (let i = 1; i <50 ; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// TAREA 2
// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

function pokemon() {
  // TODO: Implement function
}

// TAREA 3
// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

function checkNumbers() {
  // TODO: Implement function
}
