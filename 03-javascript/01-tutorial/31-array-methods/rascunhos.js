// LENGTH
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];


const fruitsLength = fruits.length; // 4
const fruitsAt = fruits.at(2); // Apple
const fruitsJoin = fruits.join(" * "); // Banana * Orange * Apple * Mango

const fruitsPop = fruits.pop(); // Mango
const fruitsPush = fruits.push("Kiwi"); // 4

const fruitsShift = fruits.shift(); // Banana
const fruitsUnshift = fruits.unshift("Pêra"); // 4

const myChildrenConcat = myGirls.concat(myBoys);

console.log(myChildrenConcat);