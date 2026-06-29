import { LinkedList } from './script.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("toString:", list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("size:", list.size());
// 6

console.log("head:", list.head());
// dog

console.log("tail:", list.tail());
// turtle

console.log("at(0):", list.at(0));
// dog

console.log("at(2):", list.at(2));
// parrot

console.log("at(99):", list.at(99));
// undefined

console.log("contains('cat'):", list.contains("cat"));
// true

console.log("contains('lion'):", list.contains("lion"));
// false

console.log("findIndex('hamster'):", list.findIndex("hamster"));
// 3

console.log("findIndex('lion'):", list.findIndex("lion"));
// -1

list.prepend("fish");
console.log("after prepend('fish'):", list.toString());
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("pop:", list.pop());
// fish

console.log("after pop:", list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.insertAt(1, "eagle", "bear");
console.log("after insertAt(1, 'eagle', 'bear'):", list.toString());
// ( dog ) -> ( eagle ) -> ( bear ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.removeAt(2);
console.log("after removeAt(2):", list.toString());
// ( dog ) -> ( eagle ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
try {
    list.insertAt(99, "x");
} catch (e) {
    console.log("insertAt out of bounds:", e.message);
}

try {
    list.removeAt(99);
} catch (e) {
    console.log("removeAt out of bounds:", e.message);
}