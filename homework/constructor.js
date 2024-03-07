function animal(color, numOfEyes, numOfLegs) {
  this.color = color;
  this.numOfEyes = numOfEyes;
  this.numOfLegs = numOfLegs;
}
animal.prototype.eat = function () {
  console.log("Time to eat!!!");
};
animal.prototype.sleep = function () {
  console.log("time to sleep!!!");
};
const ani = new animal("black", "2", "2");
console.log(ani);
ani.eat();
ani.sleep();

function Bird(name, color, ableToFly) {
  this.name = name;
  this.color = color;
  this.ableToFly = ableToFly;

  Bird.prototype.eat = function () {
    return console.log("This bird is eating food");
  };

  Bird.prototype.sleep = function () {
    return console.log("This bird is sleeping");
  };

  Bird.prototype.getName = function () {
    return this.name;
  };

  Bird.prototype.setName = function (newName) {
    this.name = newName;
  };
}
let brd = new Bird("sparrow", "black", "yes");
console.log(brd);
brd.eat();
brd.sleep();
console.log(brd.getName());
brd.setName("crow");
console.log(brd.getName());
