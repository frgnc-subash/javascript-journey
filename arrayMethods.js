const fruits = [
  { name: "apple", price: 4 },
  { name: "banana", price: 0.8 },
  { name: "orange", price: 1 },
  { name: "grape", price: 2 },
  { name: "kiwi", price: 1.5 },
  { name: "mango", price: 3 },
  { name: "peach", price: 2 },
];

// filter method
const filteredItems = fruits.filter((item) => {
  return item.price <= 1;
});
console.log("Filtered Items:", filteredItems);



// map method
const itemNames = fruits.map((item) => {
  return item.name;
});
console.log("Item Names:", itemNames);



// find method
const findItem = fruits.find((item) => {
  return item.price === 1;
});
console.log("Found Item:", findItem);



// forEach method
fruits.forEach((item) => {
  console.log(`${item.name} costs $${item.price}`);
});



//some method
const hasCheapFruits = fruits.some((item) =>{
  return item.price < 2;
});
console.log("Has Cheap Fruits:", hasCheapFruits);



// every method
const allFruitsCheap = fruits.every((item) => {
  return item.price <2;
});
console.log("Are all Fruits Cheap:", allFruitsCheap);


// reduce method
const totalPrice = fruits.reduce((item, currentTotal) => {
return item + currentTotal.price;
}, 0)
console.log("Total Price of Fruits:", totalPrice);


//includes method
const hasBanana = fruits.includes("banana")
console.log("Has Banana:", hasBanana);