
// ES6 + Array Advanced Practice Tasks:-

//TASK 1 – Employee Merge System (Spread Operator)

let empFresher = { 
  name: "Raju", 
  role: "Frontened Developer", 
  salary:50000 
};

let empPromotion = {
  role: "Senior Frontend Developer",
  bonus: 10000
};

let EmpDetails = { ...empFresher, ...empPromotion };
EmpDetails.salary = 40000;
EmpDetails.experience = "2 years";
console.log(EmpDetails);

//TASK 2 – Shopping Cart (Spread + Array)
let cart1 = ["shoes", "shirt"];
let cart2 = ["watch", "cap"];

let mergedCart = ["Bag",...cart1, ...cart2,"Socks"];
console.log(mergedCart);

//TASK 3 – Rest Operator Salary Calculator
const totalSalary = (baseSalary, ...bonuses) => {
  return baseSalary + bonuses.reduce((total, c) => total + c, 0);
}
console.log(totalSalary(50000, 5000, 4000, 3000));


//TASK 4 – Advanced Destructuring
let student = {
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
}

let { name } = student;
let { maths, science } = student.marks;
console.log(`${name} scored ${maths} in maths and ${science} in science`);


//TASK 5 – Array Manipulation
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2,1,25);// Remove 30 and add 25
numbers.reverse(); //Reverse array
numbers.includes(50); //check if 50 contains
console.log(numbers);

//TASK 6 – Flatten Data
let apiData = [1,2,[3,4,[5,6,[7,8]]]]
let flatArray = apiData.flat(Infinity);
console.log(flatArray);
console.log("Index of 6:", flatArray.indexOf(6));


//TASK 7 – Sorting Problem
let prices = [100, 5, 25, 300, 45];

let assending = prices.slice().sort((a, b) => a - b);
let descending = prices.slice().sort((a, b) => b - a);
console.log("Assending:", assending);
console.log("Descending:", descending);

//BONUS HARD TASK – Team Level

let users = [
  {name: "A", salary: 20000},
  {name: "B", salary: 40000},
  {name: "C", salary: 30000}
];
let updatedSalary = users.map(user => ({ ...user, salary: user.salary + 5000 }));
updatedSalary.sort((a,b) => b.salary - a.salary);
console.log(updatedSalary);