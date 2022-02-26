// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


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
  for (let i = 0; i < array.length; i++){
    array[i] += 1 
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  count = palabras.length
  new_string=''

  for (let i = 0; i < count; i++){
    if (i != count -1){
      new_string += palabras[i] + ' '
    }
    else{
      new_string += palabras[i]
    }
  }
  return new_string
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  output = false
  for (let i = 0; i < array.length; i++){
    if(array[i] === elemento){
      output = true
      break
    } 
  }
  return output  

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0
  for (let i = 0; i < numeros.length; i++){
    suma += numeros[i] 
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  count = resultadosTest.length
  suma = 0
  for (let i = 0; i < count; i++){
    suma += resultadosTest[i] 
  }
  promedio = suma/count
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max = numeros[0]
  suma = 0
  for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > max){
      max = numeros[i]
    } 
  }
  return max   
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  mul = 1

  if (arguments.length == 0){
    mul = 0
  }
  else{
    for (let i = 0; i < arguments.length; i++){
      mul *= arguments[i] 
    }
  }

  return mul  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  count = 0
  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      count += 1
    }
  }
  return count 
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  array_weekend = [7,1]
  output = arrayContiene(array_weekend,numeroDeDia)
  if (output){
    return "Es fin de semana"
  }
  else{
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  new_string = String(n)
  if (new_string[0] === '9'){
    return true
  }
  else{
    return false
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  output = true
  elem = arreglo[0]
  for (let i = 1; i < arreglo.length; i++){
    if (arreglo[i] !== elem){
      output = false
      break
    } 
  }
  return output     
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  my_array = []
  flag_enero = 0
  flag_marzo = 0
  flag_noviembre = 0

  for (let i = 0; i < array.length; i++){
    month = array[i]
    if (month === "Enero" && !(flag_enero)){
      my_array.push(month)
      flag_enero = 1
    } 
    if (month === "Marzo" && !(flag_marzo)){
      my_array.push(month)
      flag_marzo = 1
    } 
    if (month === "Noviembre" && !(flag_noviembre)){
      my_array.push(month)
      flag_noviembre = 1
    }
  }

  if (flag_enero&&flag_marzo&&flag_noviembre){
    return my_array
  }
  else{
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  my_array = []
  for (let i = 0; i < array.length; i++){
    if (array[i] > 100){
      my_array.push(array[i])
    }
  }
  return my_array 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  count = 10
  i = 0
  my_array = []
  flag_interrupt = 0

  do {
    i += 1
    numero += 2

    if (i === numero){
      flag_interrupt = 1
      break
    }

    my_array.push(numero)
  } while (i<count)

  if (flag_interrupt){
    return "Se interrumpió la ejecución"
  }
  else{
    return my_array
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  count = 10
  i = 0
  my_array = []

  do {
    i += 1
    numero += 2

    if (i === 10){
      continue
    }

    my_array.push(numero)
  } while (i<count)

  return my_array
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
