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
  } else if (respuesta == "8") {
    evaluaCalificaciones();
  } else if (respuesta == "9") {
    compraHelado();
  } else if (respuesta == "10") {
    getCoursePrice();
  } else if (respuesta == "11") {
    calcularTransporte();
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

// TAREA 8
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
function evaluaCalificaciones() {
  let calificacion = prompt("Ingresa tu calificación");
  if (/^\d+$/.test(calificacion)) {
    switch (parseInt(calificacion)) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        alert("Reprobado");
        break;
      case 6:
      case 7:
      case 8:
        alert("Regular");
        break;
      case 9:
        alert("Bien");
        break;
      case 10:
        alert("Excelente");
        break;
      default:
        alert("El número está fuera de rango");
        evaluaCalificaciones();
    }
  } else {
    alert("Valor no válido");
    evaluaCalificaciones();
  }
}

// TAREA 9
/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

function compraHelado() {
  let topping = prompt(
    "Bienvenido a Dairy Queen, ¿Qué topping quieres? Tenemos oreo, KitKat, Brownie o helado sencillo"
  );
  switch (topping.toLowerCase()) {
    case "sencillo":
    case "sin topping":
    case "simple":
    case "helado sencillo":
      alert("Son 50 MXN de tu helado sencillo");
      break;
    case "oreo":
      alert("Son 60 MXN de tu helado con Oreo");
      break;
    case "kitkat":
      alert("Son 65 MXN de tu helado con KitKat");
      break;
    case "browie":
      alert("Son 70 MXN de tu helado con Brownie");
      break;
    default:
      alert(
        "No tenemos este topping, lo sentimos. Son 50 MXN de tu helado sencillo."
      );
      evaluaCalificaciones();
  }
}

// TAREA 10
/*
10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses
*/

function getCoursePrice() {
  let costoMensual = 0;
  let descuento = 0;
  let tiempo = 0;
  let nombreCurso = "";
  let tipo = prompt(
    "¿Qué tipo de curso te interesa: Course, Carrera o Master?"
  );
  let beca = prompt("¿Tienes alguna beca (Facebook, Google o Jesua)?");
  switch (tipo.toLowerCase()) {
    case "course":
      costoMensual = 4999;
      tiempo = 2;
      nombreCurso = "Course";
      break;
    case "carrera":
      costoMensual = 3999;
      tiempo = 6;
      nombreCurso = "Carrera";
      break;
    case "master":
      costoMensual = 2999;
      tiempo = 12;
      nombreCurso = "Master";
      break;
    default:
      alert("Lo lamento, no contamos con ese curso. ");
      getCoursePrice();
  }
  switch (beca.toLowerCase()) {
    case "facebook":
      descuento = 20;
      break;
    case "google":
      descuento = 15;
      break;
    case "jesua":
      descuento = 50;
      break;
    default:
      alert("Lo lamento, tu beca no es válida.");
  }
  if (descuento > 0) {
    alert(
      "Felicidades, ya estás un paso más cerca \nTu " +
        nombreCurso +
        " tiene una duración de " +
        tiempo +
        " meses. \nEl costo mensual es de $" +
        costoMensual +
        " MXN y con tu beca solo pagas " +
        parseFloat((costoMensual * (100 - descuento)) / 100).toFixed(2) +
        " MXN \nEl costo total del programa es de " +
        parseFloat((tiempo * costoMensual * (100 - descuento)) / 100).toFixed(2)
    );
  } else {
    alert(
      "Felicidades, ya estás un paso más cerca \nTu " +
        nombreCurso +
        " tiene una duración de " +
        tiempo +
        " meses. \nEl costo mensual es de $" +
        costoMensual +
        " MXN \nEl costo total del programa es de " +
        parseFloat(tiempo * costoMensual).toFixed(2)
    );
  }
}
// TAREA 11
/*
11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
Entregables
*/

function calcularTransporte() {
  vehiculo = prompt("Indica que vehículo prefierees (Coche, Moto o Autobús)");
  distancia = prompt("¿Cuál es la distancia en kilómetros?");
  tarifa = 0;
  switch (vehiculo.toLowerCase()) {
    case "coche":
    case "carro":
    case "auto":
      tarifa = 0.2;
      break;
    case "moto":
    case "motocicleta":
      tarifa = 0.1;
      break;
    case "autobus":
    case "autobús":
    case "bus":
      tarifa = 0.5;
      break;
    default:
      alert("Vehiculo no disponible");
      calcularTransporte();
  }
  if (distancia > 0 && distancia < 100) {
    alert(
      "El total a pagar es de $" +
        parseFloat(distancia * tarifa + 5).toFixed(2) +
        " MXN"
    );
  } else if (distancia > 100) {
    alert(
      "El total a pagar es de $" +
        parseFloat(distancia * tarifa).toFixed(2) +
        " MXN"
    );
  } else {
    alert("La distancia no puede ser negativa");
  }
}
