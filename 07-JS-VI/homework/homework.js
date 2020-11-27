// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb(); //lo escribo asi porque cb es una funcion, entonces debo invocarla.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  cb(numeros.reduce(function(acc,numero){
    return acc + numero
  }))
   
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(function(elemento, indice) {
    cb(elemento);
  });
};

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var array = [1, 2, 3, 4, 5];
  var array2 = [];
  cb(array.map(function(elemento) {
    console.log(elemento);
  }))
  for (var i = 0; i < array.length; i++) {
    array2.push(cb(array[i]))

  }
  return array2;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
