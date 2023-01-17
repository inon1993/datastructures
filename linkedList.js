import {
  convertArrToList,
  generateList,
  getNumberFromUser,
  sortArray,
} from "./utils.js";

let list = generateList(50000);

// 1. Unsorted list
// Complexity O(n) to fill the list and O(n) to find the number.
console.log("1. Unsorted list");
await list.search();

//2. Sorted list
// Complexity O(n) to convert list to array, O(n^2) to sort the array, O(n) to convert array back to list and O(n) to search the number.
console.log("\n2. Sorted list");
const arr = list.convertListToArr();
sortArray(arr);
list = convertArrToList(arr);
console.log("List is now sorted.");
await list.search();

//3. Add value to list
// Complexity O(n) to add node.
console.log("\n3. Add value to list");
const numToAdd = await getNumberFromUser();
list.add(numToAdd);
list.printList();
