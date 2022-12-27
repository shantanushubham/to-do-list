function addTwoNumbers(a, b) {
  let sum = a + b;
  let diff =  a - b;
  return [sum, diff]
}

let [x, y] = addTwoNumbers(5, 6)
console.log(x, y)