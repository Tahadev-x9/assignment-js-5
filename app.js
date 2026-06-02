// ASSIGNMENT 5 JS 


//   1- HIGHER ORDER FUNCTION 

// ANS1
// Aisa function ko parameter me recieve kare or kisi function ko return kare..

// Example
// function greet(cb){
//     cb();
// }
// function sayHello(){
//     console.log("hello")
// }
// greet(sayHello)

// yahan greet() higher order function hai kyun ke ye function recieve kar rhaa hai ...

// ANS2
// haan.
// map( ) callback function recieve karta hai.

// ANS3
// Nahi 
// yai sirf loop chalata hai.

// ANS4
// Example of higher order function :
// let arr = [1,2,3,4];
// let result = arr.forEach(function(num){
//     console.log(num);
// });
// console.log(result);

// ANS5
// Callback function :
// jo function kisi dusrai function ko argument kai torr par diya jaye.

// Example
// function greet(name){
//     console.log("Hello", name);
// }
// function process(cb){
//     cb("ali");
// }
// process(greet);

// ANS6

// function cal(a,b,cb){
//     cb(a,b);
// }
// function add(x,y){
//     console.log(x+y);
// }                                        // output also : ???? 
// cal(18,20,add);

// ANS7
// Filter function mai condition karne wale element nikaltii. 

// Example
// let nums = [10,20,30,40];
// let result = nums.filter(function(num){
//     return nums > 20
// });
// console.log(result);                       // output : [30,40]

// ANS8
// Reduce() puri array ko ek single value mai convert karta.

// Example
// let nums = [1,2,3,4];

// let sum = nums.reduce(function(acc,curr){
//     return acc + curr;
// }, 0);
// console.log(sum);

// ANS9
// find()	                            filter()
// First match return karta hai       	Sab matches return karta hai
// Single value return	                Array return
// Search ke liye	                    Multiple results ke liye

// ANS10
// map()	                       forEach()
// New array return karta hai     Kuch return nahi karta
// Data transform karta hai	   Sirf loop chalata hai




// ARRAY HIGHER ORDER METHOD:
// 2- MAPS()                   New array banao 

// ANS1
// let num  = [1,2,3,4];
// let result = num.map(function(num){
//     return num * 2;
// });
// console.log(result);

// ANS2
// let names = ["ali", "maaz" , "taha"];

// let arr = names.map(function(names){
//     return names.toUpperCase();
// });
// console.log(arr);

// ANS3 
// let num = [10,20,30,40];
// let result = num.map(function(num){
//     return num + 10 ;
// });
// console.log(result);

// ANS4
// let name = ["ali", "taha" , "maaz"];
// let result = name.map(function(name){
//     return "Mrs " + name;
// });
// console.log(result);

// ANS5
// let num = [1,2,3,4,5];
// let result = num.map(function(num){
//     return num ** 2;
// });                                     // ** means square of the value 
// console.log(result);



// 3-  FILTER         kuch element ko select karo

// ANS1
// let num = [1,2,3,4,5,6];

// let result = num.filter(function(num){
//     return num % 2 === 0;
// });
// console.log(result);                       // output 2,4,6 in array 

// ANS2
// arrow function 
// let names = ["hassan", "ali" , "muhammd", "maaz ali"];
// let result = names.filter(names => names.length >5);

// console.log(result);

// ANS3
// arrow function 
// let num = [20,40,60,80,120,150,140];
// let result = num.filter(num => num > 80);
//                                                  // output 120,150,140 
// console.log(result);

// ANS4
// let marks = [40,50,60,80,20];

// let result = marks.filter(function(marks){
//     return marks >= 50;
// });                                              // output 50 60 80 
// console.log(result);

// ANS5
// let nums = [ -10,10,-5,20,-50,70];
// let result = nums.filter(nums => nums < 0);
                                                   // output -10 -5 -50 
// console.log(result);



// 4- FOR EACH()        Sirf kaam karo (print , update , etc )

// ANS1
// let num = [1,2,3,4];
// num.forEach(function(num){
//     console.log(num);
// });

// // ANS2
// // Fruits Numbering
// let fruits = ["Apple","Banana","Mango"];

// fruits.forEach((fruit,index)=>{
//     console.log(`${index + 1}. ${fruit}`);
// });

// ANS3
// WELCOME USER
//  let user = ["ali","ahmed","hassan"];

//  user.forEach(user=>{
//     console.log(`Welcome ${user}`);
// });

// // ANS4
// // TOTAL WITH FOREACH
// let nums = [10,20,30];
// let total = 0;

// nums.forEach(function(num){
//     total += num;
// });
// console.log(total);

// // ANS5
// let student = ["ali", "ahmed"];

// student.forEach(student=>{
//     console.log(student.toUpperCase());
// });



// 5- FIND()        Pehla match return karta hai    pehla or akhri bus aikk 

// ANS1
//    let nums = [10,20,30,40];
//     let result = nums.find(function(num){
//         return num > 25;
//     });
//     console.log(result);                       // output 30


// ANS2 
// let products = ["ali" , "ahmed" , "hassan"];
// let result = products.find(function(products){
//     return products === "ali";
// });
// console.log(result);                       // output ali

// ANS3
// let products = [20,80,50,100,150,510,200];
// let result = products.find(function(products){
//     return products > 120;
// });
// console.log(result);                       // output 150

// ANS4
// let num = [1,2,3,4,5,6];
// let result = num.find(function(num){
//     return num % 2 === 0;
// });
// console.log(result);                       // output 2

// ANS5
// let nums = [35,50,60,80,72,80,89];
// let result = nums.find(nums => nums < 50);
// console.log(result, "fail ");                       // output 35  fail 



// 6- REDUCE()        Puri array ko ek single value mai convert karta hai
                              // acc acumulator  curr current value
                              //   ? :  ye ternary operator hai  (condition ? true : false)   


// // ANS1
// let nums = [1,2,3,4];
// let sum = nums.reduce(function(acc,curr){
//     return acc + curr;
// },0);
// console.log(sum);                       // output 10    sum of the array 

// // ANS2
// let nums = [10,40,5,80];

// let max = nums.reduce((acc,curr)=>{
//     return curr > acc ? curr : acc;
// });

// console.log(max);                       // output 80   maximum number in the array

// // ANS3
//  let words = ["I","love","JavaScript"];
//  let sentence = words.reduce(function(acc,curr){
//     return acc + " " + curr;
//  });
//  console.log(sentence);                       // output I love JavaScript

// // ANS4
// let cart = [100,150,200,500];
//  let total = cart.reduce(function(acc,curr){
//     return acc + curr;
//  }, 0);
//  console.log(total);                       // output 950



// 7- FINDLASTINDEX()     Pehla match return karta hai    pehla or akhri bus aikk

// // ANS1
// let nums = [1,2,3,2,4,2];
// console.log(nums.findLastIndex(num => num === 2));                  // output 5   last index of the element 2 in the array

// // ANS2
// let nums = [1,3,4,7,8];

// console.log(nums.findLastIndex(num => num % 2 === 0));              // output 4   last index of the even number in the array

// // ANS3
// let names = ["Ali","Ahmed","Ali","Hassan"];
// let result = names.findLastIndex(function(names){
//     return names === "Ali";
// });
// console.log(result);                                        // output 2   last index of the element "Ali" in the array

// // ANS4
// let prices = [50,120,80,200];

// console.log(prices.findLastIndex(price => price > 100));                     // output 3   last index of the element greater than 100 in the array

// ANS5
// let nums = [10,-5,20,-2];

// let result = nums.findLastIndex(function(num){
//     return num < 0;
// });
// console.log(result);                       // output 3   last index of the negative number in the array



// 8- Object   

//  ANS1
// Object data ko key:value pairs me store karta hai.

// ANS2
// let student = {
    // name: "Ali",
    // age: 20
// };

// ANS3
// object property ko access karne ke do tarike hote hain : dot notation or bracket notation

// dot notation
// console.log(student.name);                       // output Ali

// bracket notation
// console.log(student["age"]);                    // output 20

// ANS4
// new property
// student.grade = "A";
// console.log(student);                       // output { name: "Ali", age: 20, grade: "A" }

// ANS5
// delete property
// delete student.age;
// console.log(student);                       // output { name: "Ali", grade: "A" }

// ANS6
// let car = {
//     brand: "Toyota",
//     model: "Corolla"
// };

// ANS7
// Object me Function
// let student = {
//     name: "Ali",

//     greet: function(){
//         console.log("Hello");
//     }
// };

// student.greet();

// ANS8
// this current object ko refer karta hai.
// let student = {
//     name: "Ali",

//     showName: function(){
//         console.log(this.name);
//     }
// };

// student.showName();

// ANS9
// object key
// let student = {
//     name: "Ali",
//     age: 20                        // object value kia poocha hai jaisai "Ali" or 20 etc
// };                                //object key kia poocha hai jaisai naaam or age etc

// console.log(Object.keys(student));                       // output ["name", "age"]

// ANS10
// console.log(Object.values(student));                     // output ["Ali", 20]



// 9- NESTED OBJECTS     Object ke andar object

// ANS1
// let person = {
//     name: "Ali",

//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// ANS2
// let user = {
//     name :"maaz",

//     address : {
//         city: "Karachi",
//         country: "Pakistan",
//         area : "Gulshan"
//     }
// }

// // ANS3
// console.log(user.address.city);                      // output Karachi  access city 

// // ANS4
// let student = {
//     name: "Ali",
//     marks : {
//         math: 80,
//         english: 90
//     }
// };

// // ANS5
// let company = {
//     name: "ABC",

//     employee: {
//         id: 1,
//         name: "Ali"
//     }
//  };                      // company object



//  10 - ARRAY OF OBJECTS

// ANS1
// Jab array ke andar objects store hon.
// let students = [
//     {name:"Ali", marks:90},
//     {name:"Ahmed", marks:80}
// ];

// // ANS2
// let students = [
//     {name:"Ali", marks:90},
//     {name:"Ahmed", marks:70},
//     {name:"Hassan", marks:40}
// ];                                        //STUDENT ARRAY OF OBJECTS

// ANS3
// let students = ["Ali", "Ahmed", "Hassan"];
// let result = students.forEach(function(student){
//     console.log(student);
// });                                              // output Ali Ahmed Hassan  print all the names in the array

// ANS4
//  let students = [
//      {name:"Ali", marks:90},
//      {name:"Ahmed", marks:70},
//      {name:"Hassan", marks:40} ];

//      let passedStudents = students.filter(function(student){
//          return student.marks >= 50;
//      });
//         console.log(passedStudents);                       // output [{name:"Ali", marks:90}, {name:"Ahmed", marks:70}]  print all the students who passed the exam

// ANS5
// let students = ["ali", "ahmed", "hassan"];
// let result = students.map(function(student){
//     return student.toUpperCase();
// });

// console.log(result);

// ANS6


let students = [
    {name:"Ali", marks:90},
    {name:"Ahmed", marks:70},
    {name:"Hassan", marks:40}
];
let highest = students.reduce((acc,curr)=>{
    return curr.marks > acc.marks ? curr : acc;
});

console.log(highest);                   // output {name:"Ali", marks:90}  student with the highest marks in the array of objects 



// ANS6
let products = [
    {name:"Pen", stock:10},
    {name:"Book", stock:20}
];

let total = products.reduce((acc,curr)=>{
    return acc + curr.stock;
},0);

console.log(total);                       // output 30   total stock of all products

// ANS7
// let students = [
//     {
//         name: "Ali",
//         age: 20
//     }
// ];
// students.push({
//     name:"Usman",
//     marks:85
// });
// console.log(students);                       // output [{name:"Ali", age:20}, {name:"Usman", marks:85}]  add new student to the array of objects

// ANS8


let users = [
    {id:1,name:"Ali"},
    {id:2,name:"Ahmed"}
];
let result = users.find(function(user){
    return user.id === 2;
});
console.log(result);                       // output {id:2,name:"Ahmed"}  find user with id 2 in the array of object

// ANS9
// let students = [
//     {
//         name: "Ali",
//         age: 20
//     }
// ];

// let result = students.forEach(function(student){
//     console.log(student.name);
//     console.log(student.age);
// });                                              // output Ali  print the name of each student in the array of objects