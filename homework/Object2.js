function countWords(sentence) {
  const wordsArray = sentence.split(" ");
  const wordCount = {};
  wordsArray.forEach((element) => {
    if (wordCount[element]) {
      wordCount[element] += 1;
    } else {
      wordCount[element] = 1;
    }
  });
  return wordCount;
}
const sentence = "hello world hello";
console.log(countWords(sentence));

function updateInventory(inventory, newItems) {
  newItems.forEach((item) => {
    if (inventory.hasOwnProperty(item)) {
      inventory[item] += 1;
    } else {
      inventory[item] = 1;
    }
  });
  return inventory;
}

let inventory = { apples: 2, bananas: 1 };
let newItems = ["apples", "oranges", "apples"];
inventory = updateInventory(inventory, newItems);
console.log(inventory);

function groupPeopleByAge(people) {
  const grpPeople = {};
  people.forEach((ppl) => {
    const { name, age } = ppl;
    if (grpPeople.hasOwnProperty(age)) {
      grpPeople[age].push(name);
    } else {
      grpPeople[age] = [name];
    }
  });
  return grpPeople;
}
let people = [
  { name: "John", age: 23 },
  { name: "Amy", age: 25 },
  { name: "Cameron", age: 23 },
];
let grpPeople = groupPeopleByAge(people);
console.log(grpPeople);
