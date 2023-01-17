import { getAction, getNumberFromUser } from "./utils.js";

const queue = new Array(10);

for (let i = 0; i < queue.length; i++) {
  queue[i] = Math.floor(Math.random() * 1000);
}
console.log(queue);

const action = await getAction("queue");
if (action === "enqueue") {
  const num = await getNumberFromUser();
  queue.push(num);
  console.log(queue);
} else if (action === "dequeue") {
  queue.shift();
  console.log(queue);
}
