

const arr1 = [1, 7, 2, 6, 10, 25 ,17, 25, 27, 125, 467, 1070]
const arr2 = [0, 24, 0o7, 16, 1032, 4247 ,57, 5, 23, 57, 4767, 10]


const detectBombs = (arr) => {
  arr = arr.filter(element =>  element.toString().endsWith('7'))
  console.log(arr)
}

detectBombs(arr1)
detectBombs(arr2)


