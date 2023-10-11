// 1. Given an array, find the sum of all even values inside the array and return it.

function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(sumEven([1, 1, 4, 1, 1]));
// console.log(sumEven([1, 2, 3, 4]));

// 2. Write a function that will take an array of numbers and return a new array that only contains unique numbers

function unique(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

// console.log(unique([1, 1, 2, 1, 3]));

// 3. Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

const array = [1, 2, 3, 4, 2, 3, 1];

function removeOccurrence(array, num) {
  // Counting Backwards
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == num) {
      // Remove the occurrence
      array.splice(i, 1);
    }
  }
}

// removeOccurrence(array, 1);
// console.log(array);
