// 6. Realizar las siguientes operaciones sobre una matriz X de orden n*m: 
// a. Ingresar el orden “m” y “n”, y los datos de la matriz 
// b. Determinar los elementos máximos y mínimos de cada fila 
// c. Determinar los elementos máximos y mínimos de cada columna 
// */\

const minMaxElement = () => {
  const arr1 = [[3,26,3], [43,52,16], [74,82,94]]

  arr1.forEach((element, i) => {
    console.log(`fila ${i+1}: ${Math.min(...element)}`)

    // console.log(...element)
    // console.log(element)
  })
}

minMaxElement()

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)




// // el numero 7 al final es una bomba!!
// // crear detector de bombas