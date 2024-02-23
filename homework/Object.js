const user = {
  Name: "Anusha",
  phone: {
    home: "111-111-1111",
    cell: "100-200-3433",
  },
  email: "anushabichal@gmail.com",
  webSite: "www.home.com",
  age: 21,
  cart: ["grapes"],
  getName: function () {
    return this.Name;
  },
  getPhone: function (phoneType) {
    return this.phone[phoneType];
  },
  getEmail: function () {
    return this.email;
  },
  addToCart: function (item) {
    if (item) {
      this.cart.push(item);
      return true;
    } else {
      return false;
    }
  },
  addNewPhone: function (phoneType, phoneNumber) {
    this.phone[phoneType] = phoneNumber;
  },
  updateNewPhone: function (phoneType, newPhoneNumber) {
    if (this.phone[phoneType] !== undefined) {
      this.phone[phoneType] = newPhoneNumber;
    }
  },
};

console.log(user.getName());
console.log(user.getPhone("home"));
console.log(user.getEmail());
console.log(user.addToCart("orange"));
user.addNewPhone("work", "100-200-3000");
console.log(user.getPhone("work"));
user.updateNewPhone("cell");
console.log(user.phone);
