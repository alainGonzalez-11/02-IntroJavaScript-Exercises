function menudeEjercicios() {
  let respuesta = prompt("Indica que ejercicio quieres (1-5)");
  if (respuesta == "1") {
    multiplosDeCinco();
  } else if (respuesta == "2") {
    loteria();
  } else if (respuesta == "3") {
    memoria();
  } else if (respuesta == "4") {
    memoria();
  } else if (respuesta == "5") {
    evaluaDiasSemana();
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

// TAREA 2
// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
function memoria() {
  let continuar = true;
  let numberList = [];
  while (continuar) {
    let number = prompt("Ingresa un numero (ingresa 0 para terminar)");
    if (isNaN(number)) {
      alert("No ingresaste un numero");
    } else {
      numberList.push(number);
      if (number == 0) {
        continuar = false;
      }
    }
  }
  console.log(numberList);
}

// TAREA 4
// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
function memoria() {
  let continuar = true;
  let frase = "";
  while (continuar) {
    let palabra = prompt(
      "Ingresa una palabra (Da clic en ok sin escribir nada para terminar)"
    );
    if (palabra !== "") {
      frase += " " + palabra;
    } else {
      continuar = false;
    }
  }
  console.log(frase);
}

// TAREA 5
// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

function evaluaDiasSemana() {
  let continuar = true;
  while (continuar) {
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
        alert("Disfruta tu fin de semana");
        break;
      case "domingo":
        alert("Ve a descansar");
        continuar = false;
        break;
      case "martes":
        alert("Aprovecha el día");
        break;
      case "miercoles":
      case "miércoles":
        alert("Estamos a media semana");
        break;
      case "jueves":
        alert("Otro día, otro dolar");
        break;
      default:
        alert("No ingresaste un día de la semana");
        break;
    }
  }
}
