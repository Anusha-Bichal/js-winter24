class Book {
  title;
  author;
  yearPublished;

  constructor(
    title = "Harry Potter",
    author = "J.K.Rowling",
    yearPublished = 1997
  ) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
  getSummary() {
    console.log(
      `${this.title} is written by ${this.author} in the year ${this.yearPublished}`
    );
  }
}

//const bk = new Book();
//bk.getSummary();

class Rectangle {
  width;
  height;

  constructor(width = 5, height = 7) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    //console.log(`area of rectangle is {this.width}*${this.height}`);
    return this.width * this.height;
  }

  calculatePerimeter() {
    //console.log(`perimeter of rectangle is 2*(${this.height}+${this.width})`);
    return 2 * (this.height + this.width);
  }
}
//const rec = new Rectangle();
//console.log(rec.calculateArea());
//console.log(rec.calculatePerimeter());

class Vehicle {
  make;
  model;
  year;

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return this.make + " " + this.model + " " + this.year;
  }
}

class Car extends Vehicle {
  numDoors;

  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getInfo() {
    return this.make + " " + this.model + " " + this.year + " " + this.numDoors;
  }
}

//const vehcl = new Vehicle("Audi", "A6", "2023");
//const cr = new Car("Mazda", "Cx-8", "2024", "4");
//console.log(vehcl.getInfo());
//console.log(cr.getInfo());

class Employee {
  #name;
  #id;
  #email;

  constructor(name, id, email) {
    this.#name = name;
    this.#id = id;
    this.#email = email;
  }
  getInfor() {
    return this.#name + " " + this.id + " " + this.email;
  }
  getEmail() {
    return this.#email;
  }
}

class CrewMember extends Employee {
  #manager;

  constructor(name, id, email, manager) {
    super(name, id, email);
    this.#manager = manager;
  }
  setManager(mangName) {
    if (typeof mangName !== "string") return;
    this.manager = mangName;
  }
  getManager() {
    this.manager = this.manager;
  }
}

class Manager extends Employee {
  #subordinate = [];

  constructor(name, id, email, subordinate) {
    super(name, id, email);
    this.#subordinate = subordinate;
  }
  add(employee) {
    if (Employee.includes(employee)) {
      this.#subordinate.push(employee);
    }
  }
  remove(employee) {
    const len = this.#subordinate.length(employee);
    if (len !== -1) {
    }
  }
}
