// type con

function converttonumber(str){
  try{
    const num = number(str);
    if(number.isnan(num)){
      throw new error("invalid number");
    }
    return num;
  }catch(error){
    return error.message;
  }
}
console.log(converttonumber("123"));
console.log(converttonumber("abc"));

//2

function getperson(person){
  try{
    if(typeof person !=="object" || !person.name || !person.age ){
     throw new error("invalid parameter type"); 
    }
    return 'name: ${person.name}, ase: ${person.age}';
  }catch(error){
    return error.message;
  }
}
console.log(getperson({name: "rahul" , age: 18}));
console.log(getperson({name: "rk"}));
console.log(getperson(["name", "rkk"]));

//3
class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}.`;
  }
}

const myCar = new Car("Skoda", "Rapid", 2022);

console.log(myCar.getDescription()); 
//4
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("sunil", "Software Engineer", 80000);

console.log(employee1.getSalary());

//5

class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("Ranjeet", 20);
console.log(person1.getDetails()); 

const person2 = new Person();
console.log(person2.getDetails)

//6
class calculator{
  static add(num1, num2){
    return num1 + num2;
  }
}
const result = calculator.add(10, 5);
console.log(result);

//7
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    return this.password.replace(/./g, "*");
  }

  setPassword(newPassword) {
    let containsNumber = false;
    let containsUppercase = false;
    for (let i = 0; i < newPassword.length; i++) {
      const char = newPassword.charAt(i);
      if (!isNaN(char)) {
        containsNumber = true;
      } else if (char === char.toUpperCase()) {
        containsUppercase = true;
      }
    }

    if (newPassword.length >= 8 && containsNumber && containsUppercase) {
      this.password = newPassword;
    } else {
   
    }
  }
}

// Expected output:
const user = new User("johndoe", "Password123");
console.log(user.getPassword()); // 
user.setPassword("myPassword"); 
user.setPassword("MyPassword")
user.setPassword("Mypassword123");
console.log(user.getPassword()); 

//8


//9

function numberChecher(numbers){
  return function (num) {
    return numbers.includes(num);
  };
}

const arr = [1,2,3,4,5];
const checkNum = numberChecker(arr);

console.log(checkNum(3));
console.log(checkNum(6));

//10
function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}

// Expected Output

var products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
