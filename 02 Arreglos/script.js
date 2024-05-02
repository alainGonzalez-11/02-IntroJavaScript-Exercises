function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-3)");
  if (respuesta == "1") {
    randomGenerator(10);
  } else if (respuesta == "2") {
    alert("Aún no soportado");
    menudeEjercicios();
  } else if (respuesta == "3") {
    alert("Aún no soportado");
    menudeEjercicios();
  } else {
    alert("Perdón, no entendí tu respuesta");
    menudeEjercicios();
  }
}

menudeEjercicios();

function randomGenerator(numero) {
  let arreglo = [];
  for (let i = 0; i < numero; i++) {
    arreglo.push(Math.random());
  }
  console.log(arreglo);
  return null;
}
