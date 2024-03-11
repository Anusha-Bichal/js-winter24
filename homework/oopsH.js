class Animal {
  name;
  color;
  numOfEyes;
  numOfLegs;

  constructor(
    name = "Unknown",
    color = "Unknown",
    numOfEyes = 2,
    numOfLegs = 4
  ) {
    this.name = name;
    this.color = color;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;
  }

  eat() {
    console.log("Time to eat!!!");
  }
  sleep() {
    console.log("animal are either herbivorous,omnivorous or carnivorous");
  }
  walk() {
    console.log("All animals walk with their legs");
  }
  run() {
    console.log("All animals cannot run");
  }
}

class Bird extends Animal {
  canFly;

  constructor(name, color, numOfEyes, numOfLegs, canFly) {
    super(name, color, numOfEyes, numOfLegs);
    this.canFly = canFly;
  }

  fly() {
    console.log("Birds can fly and walk");
  }
  peck() {
    console.log("Bird peck with their beaks");
  }
}

class Dog extends Animal {
  dogBreed;

  constructor(name, color, numOfEyes, numOfLegs, dogBreed) {
    super(name, color, numOfEyes, numOfLegs);
    this.dogBreed = dogBreed;
  }

  bark() {
    console.log("dogs bark");
  }
  dig() {
    console.log(`${this.name} dig the ground as an activity`);
  }
}

let ani = new Animal();
const bird = new Bird("crow", "black", 2, 2);
const dg = new Dog("cooper", "white", 2, 4, "pomerian");
ani.sleep();
bird.peck();
dg.dig();
