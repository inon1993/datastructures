import { getAction, getNumberFromUser } from "./utils.js";

const stack = new Array(10);

for (let i = 0; i < stack.length; i++) {
  stack[i] = Math.floor(Math.random() * 1000);
}
console.log(stack);

const action = await getAction("stack");
if (action === "push") {
  const num = await getNumberFromUser();
  stack.push(num);
  console.log(stack);
} else if (action === "pop") {
  stack.pop();
  console.log(stack);
} else if (action === "top") {
  const topStack = stack[stack.length - 1];
  console.log(topStack);
}
