import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { LinkedList } from "./listAndNodeClasses.js";

export const getNumberFromUser = async () => {
  const rl = createInterface({ input, output });
  const validator = /^[0-9]{1,3}$/;
  let num = null;
  while (!validator.test(num)) {
    num = await rl.question("Enter a number: ");
  }
  rl.close();
  return Number(num);
};

export const checkIfNumInArr = async (arr) => {
  const num = await getNumberFromUser();
  let isInArr = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      isInArr = true;
      break;
    }
  }
  if (isInArr) {
    console.log("Number in array.");
    return;
  }
  console.log("Number is not in array.");
};

export const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

export const checkIfNumInArrSorted = async (arr) => {
  const num = await getNumberFromUser();
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      console.log("Number in array.");
      return true;
    } else if (arr[mid] < num) start = mid + 1;
    else end = mid - 1;
  }
  console.log("Number is not in array.");
  return false;
};

export const convertArrToList = (arr) => {
  const ll = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    ll.add(arr[i]);
  }
  return ll;
};

export const getAction = async (type) => {
  const rl = createInterface({ input, output });
  let action = null;
  if (type === "stack") {
    while (action !== "push" && action !== "pop" && action !== "top") {
      action = await rl.question("Select an action (push/pop/top): ");
    }
  }
  if (type === "queue") {
    while (action !== "enqueue" && action !== "dequeue") {
      action = await rl.question("Select an action (enqueue/dequeue): ");
    }
  }
  rl.close();
  return action;
};

export const generateList = (num) => {
  const list = new LinkedList();

  for (let i = 0; i < num; i++) {
    list.add(Math.floor(Math.random() * 1000));
  }
  return list;
};
