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
// 2- MAPS()

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



// 

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