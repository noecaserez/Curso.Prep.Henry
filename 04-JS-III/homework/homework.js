// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}
// devolverPrimerElemento([22, 32, 12, 321])

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  
  return array[array.length-1];
}
// devolverUltimoElemento([22, 43, 212, 31221])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  
  return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for(let i = 0; i < array.length; ++i) {
    array[i] = array[i] + 1;
  }

  return array;
} 
//incrementarPorUno([1, 2, 3, 4, 5])


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento; //array.push(elemento);
  return array;                   //return array;
}
// agregarItemAlFinalDelArray([10, 22, 34])


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' '); //NO OLVIDAR, las comillas deben estar separadas.
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;   //Recordar la ubicacion del return, fuera de las llaves.
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumar = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumar = sumar + numeros[i];  
  }
  return sumar;  //RETURN antes de la llave de cierre
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
    var promedio = (suma / (resultadosTest.length));
  }
    return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max.apply(Math, numeros);

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length < 1) {  //si la cantidad de elementos es menos a 1 (vacio) me devolvera 0
    return 0;
  }
  var multiplicar = 1; //si colocamos 0 nos devolvera siempre 0.
  for (var i = 0; i < arguments.length; i++) {
    multiplicar = multiplicar * arguments[i];
  } 
  return multiplicar;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
