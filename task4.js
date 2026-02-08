 /*INTERMEDIATE LEVEL - FUNCTIONS FULL
  ASSIGNMENT:-

 SECTION 1 – Real-Time Function Logic

1. Payroll System:
 Create calculateSalary(basicSalary, bonusPercentage)
 - Calculate bonus
- Deduct 5% tax
- Return final salary
 - Print full salary breakdown*/

// Coding:

function calculateSalary(basicSalary,bonusPercentage){
    let bonus=basicSalary*bonusPercentage/100;
    let grossSalary=basicSalary+bonus;
    let tax=grossSalary*0.05;
    let finalSalary=grossSalary-tax;

    console.log("Basic Salary:",basicSalary);
    console.log("Bonus:",bonus);
    console.log("Gross Salary:",grossSalary);
    console.log("Tax:",tax);
    console.log("Final Salary:",finalSalary);

    return finalSalary;
}  
calculateSalary(50000,10);




/* 2. Student Result System:
Create generateResult(name, marksArray)
 - Calculate total
 - Calculate average
 - Decide Grade (A/B/C/Fail)
 - Return result object*/

// Coding: 

function generateResult(name,marksArray){
    let total=0;
    for(let i=0; i<marksArray.length; i++){
        total+=marksArray[i];
    }
    let average=total/marksArray.length;
    let grade;
    if(average>=90){
        grade="A";
    }else if(average>=75){
        grade="B";
    }else if(average>=50){
        grade="C";
    }else{
        grade="Fail";
    }

    return{
        name,
        total,
        average,
        grade
    }
}
console.log(generateResult("Raju",[85,90,77,86,92]));


/* SECTION 2 – Scope & Hoisting (Debugging)

 3. Debug This Code:
 function demo(){
 if(true){
 var a = 10;
 let b = 20;
 }
 console.log(a); output:10
 console.log(b); output:Reference error
 }*/

 Questions:
 -// What will happen?
   // a prints 10
  // b → ReferenceError

 //- Why? 
 // var is function scoped,accessible outside block so gives ReferenceError.
//let is block scoped so it is not accessible outside block.

 // Coding:


function demo() {
    if (true) {
        var a = 10;
        let b = 20;
        console.log(a);
        console.log(b);
    }
}
demo();

//correct code:

function demo() {
    let a,b;
    if (true) {
         a = 10;
         b = 20;
    }
        console.log(a); // 10
        console.log(b); // 20
    
}




/* 4. Hoisting Analysis:
 console.log(x);
 var x = 100;
 console.log(y);
 let y = 200;
 Predict output and explain.*/

//Coding:
console.log(x); // undefined
var x = 100;

console.log(y); // ReferenceError
 let y = 200;



//Coding:

function generateInvoice(orderId) {
    console.log("Invoice Generated for Order:", orderId);
}

function processOrder(orderId, callback) {
    console.log("Order Processed:", orderId);
    callback(orderId); //here callback is function passed as argument.
}

processOrder(105, generateInvoice);


/*6. Bank Transaction System:
Create transaction(amount, type, callback)
- If deposit → add
- If withdraw → subtract
- Call sendSMS()*/

//Coding:

let balance=5000;
function sendSMS(message){
    console.log("SMS",message);
}
function transaction(amount,type,callback){
    if(type==="deposit"){
        balance+=amount;
    }else if(type==="withdraw"){
        balance-=amount;
    }
    callback(`Transaction successful.Balance: ${balance}`);
}
transaction(1000, "deposit", sendSMS);
transaction(500, "withdraw", sendSMS);


/* SECTION 4 – Currying (E-Commerce)

 7. Dynamic Price Builder:
 Create priceBuilder(basePrice)(discount)(tax)
 Return final price
 Example: priceBuilder(2000)(15)(18)*/

//Coding:
function priceBuilder(basePrice) {
    return function(discount) {
        return function(tax) {
            let discountAmount = basePrice * (discount / 100);
            let discountedPrice = basePrice - discountAmount;
            let taxAmount = discountedPrice * (tax / 100);
            return discountedPrice + taxAmount;
        };
    };
}

/*SECTION 4 – Currying (E-Commerce)

 7. Dynamic Price Builder:
 Create priceBuilder(basePrice)(discount)(tax)
 Return final price
 Example: priceBuilder(2000)(15)(18)*/

//Coding:

function priceBuilder(basePrice) {
    return function(discount) {
        return function(tax) {
            let discountAmount = basePrice * (discount / 100);
            let discountedPrice = basePrice - discountAmount;
            let taxAmount = discountedPrice * (tax / 100);
            return discountedPrice + taxAmount;
        };
    };
}

console.log(priceBuilder(3000)(10)(15));


/*SECTION 5 – IIFE (Security + Encapsulation)

 8. Secure Company Module:

 - Store private variable companyCode
 - Expose getCompanyStatus()
 - companyCode should not be directly accessible*/

//Coding:

const CompanyModule = (function() {
    let companyCode = "COMP12345"; 

    return {
        getCompanyStatus: function() {
            return "Company Active";
        }
    };
})();

console.log(CompanyModule.getCompanyStatus());



/*SECTION 6 – Generator (Advanced Logic)

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.*/

//Coding:

function* orderIdGenerator() {
    let id = 1001;
    while (true) {
        yield "ORD" + id++;
    }
}

const orderGen = orderIdGenerator();
console.log(orderGen.next().value);
console.log(orderGen.next().value);
console.log(orderGen.next().value);


/* 10. Coupon Spin System:
Yield:
- 10% OFF
- 20% OFF
- 50% OFF
- No Luck
- Jackpot
Simulate multiple spins.*/

//Coding:

function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";
}

const spin = couponGenerator();

console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);


/* SECTION 7 – Mini Project (Integrated)

Mini E-Commerce Flow:
- addToCart(product, price)
- calculateTotal()
- applyDiscount() using currying
- generateCoupon() using generator
- processPayment() using callback
- Hide config using IIFE*/

//Coding:


 const shop = (function () {
  let cart = [];

  function addToCart(product, price) {
    cart.push({ product, price });
    console.log(product, "added to cart");
  }

  function calculateTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total;
  }

  function applyDiscount(discountPercent) {
    return function (total) {
      return total - (total * discountPercent / 100);
    };
  }

  function* generateCoupon() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
  }

  function processPayment(amount, callback) {
    console.log("Processing payment...");
    callback(amount);
  }

  return {
    addToCart,
    calculateTotal,
    applyDiscount,
    generateCoupon,
    processPayment
  };

})();

shop.addToCart("Mobile", 20000);
shop.addToCart("Headphones", 2000);
console.log("Total:",calculateTotal());

let discountFn = shop.applyDiscount(10);
let finalAmount = discountFn(total);
console.log("After Discount:", finalAmount);

const coupon = shop.generateCoupon();
console.log(coupon.next().value);
console.log(coupon.next().value);

shop.processPayment(finalAmount, function (amount) {
  console.log("Payment successful for Rs", amount);
});


// Concept Questions:

//1. Difference between function declaration and function expression?

//ANS:
//A function declaration is hoisted completely, so it can be called before it is defined in the code. 
//A function expression is not hoisted, so it must be defined before it is used.
//Function declarations always have a name, whereas function expressions can be anonymous.
//Function expressions are commonly used in callbacks.

//2. What is a higher order function?

//ANS:
//A higher order function is a function that can accept another function as an argument or return a function as its result. 
// It helps in writing reusable, flexible, and cleaner code.
//Functions like map, filter, and reduce are common examples of higher order functions used in real-world applications.

//3. Real-time example of a generator
//ANS:
//Generators are used in real-time applications where values are needed one at a time, such as generating unique order IDs, displaying coupons one by one, loading paginated data, or handling game levels. They improve performance by pausing execution and saving memory.

//4. Why do we use IIFE?
//ANS:
//IIFE is used to execute code immediately and to hide variables from the global scope. It helps in data security, avoids variable conflicts, and is commonly used to create private modules in applications like shopping carts and configuration files.

//5. Difference between var, let, and const?
//ANS: 
// Feature	   var	    let	      const
// Scope	:  Function	Block	  Block
// Hoisting	:  Yes	    Yes       Yes
// Reassign	:  Yes	    Yes	       No
// Redeclare:  Yes	    No	       No


