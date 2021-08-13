const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    if (typeof appetizer === "string") {
      if (appetizer) {
        this._courses.appetizers.push(appetizer);
      }
    }
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    if (typeof main === "string") {
      if (main) {
        this._courses.mains.push(main);
      }
    }
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    if (typeof dessert === "string") {
      if (dessert) {
        this._courses.desserts.push(dessert);
      }
    }
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is 
    ${appetizer.name}, 
    ${main.name}, 
    ${dessert.name} 
    Total Price: ${totalPrice}`;
  },
};
menu.addDishToCourse("appetizers", "orange juice", 15);
menu.addDishToCourse("appetizers", "mango juice", 10);
menu.addDishToCourse("appetizers", "pineapple juice", 12);
menu.addDishToCourse("mains", "fufu", 20);
menu.addDishToCourse("mains", "waakye", 18);
menu.addDishToCourse("mains", "banku", 28);
menu.addDishToCourse("desserts", "chicken", 25);
menu.addDishToCourse("desserts", "sausage", 25);
menu.addDishToCourse("desserts", "gizzard", 25);

let meal = menu.generateRandomMeal();
console.log(meal);
