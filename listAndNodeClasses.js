import { getNumberFromUser } from "./utils.js";

export class Node {
  constructor(element, index) {
    this.element = element;
    this.index = index;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element, this.size);

    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  async search() {
    const num = await getNumberFromUser();
    let current = this.head;

    while (current !== null) {
      if (current.element === num) {
        console.log("Number is in the list, on index " + current.index + ".");
        return;
      }
      current = current.next;
    }
    console.log("Number is not in the list.");
    return;
  }

  findlength() {
    let curr = this.head;
    let counter = 0;
    while (curr !== null) {
      counter++;
      curr = curr.next;
    }
    return counter;
  }

  top() {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr.element;
  }

  pop() {
    let curr = this.head;
    if (curr === null) {
      return null;
    }
    if (curr.next === null) {
      this.head = null;
      return null;
    }
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
    return;
  }

  convertListToArr() {
    let arr = new Array(this.findlength());
    let index = 0;
    let curr = this.head;

    while (curr != null) {
      arr[index] = curr.element;
      index++;
      curr = curr.next;
    }
    return arr;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + ", " + curr.index;
      curr = curr.next;
      if (curr) {
        str += " | ";
      }
    }
    console.log(str);
  }
}
