import { generateList, getAction, getNumberFromUser } from "./utils.js";

const stack = generateList(10);

stack.printList();

const action = await getAction("stack");
if (action === "push") {
  const num = await getNumberFromUser();
  stack.add(num);
  stack.printList();
} else if (action === "pop") {
  stack.pop();
  stack.printList();
} else if (action === "top") {
  console.log(stack.top());
}
