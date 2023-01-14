import { checkIfNumInArr, sortArray, checkIfNumInArrSorted } from "./utils.js";

// 1. Unsorted array
// Complexity O(n) to fill the array and O(n) to search for the number.
console.log("1. Unsorted array");
const arr = new Array(50000);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 1000);
}
console.log("Unsorted array: " + arr);
await checkIfNumInArr(arr);

// 2. Sorted array
// Complexity O(n^2) to sort the array and O(logN) to search for the number.
console.log("\n2. Sorted array");
sortArray(arr);
console.log("Sorted array: " + arr);
await checkIfNumInArrSorted(arr);
