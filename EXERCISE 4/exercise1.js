let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  var a = arr.filter(item => item % 2 === 0)
  console.log(a)
  return a;
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  var square = arr.map(item => item * item)
  return square;
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  var sum = arr.reduce((total,item) => total + item, 0);
  console.log(sum);
  return sum;
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15