// 1) Creating a variable
// in this example I create varable a, variable b and variable sum
// i show the value of sum in the console.

var a = 10;
var b = 3;
var sum = a+b;
console.log(sum);

// Data type (total 5)
// 1) Sting - character, sentence or word
// you use '' of "" to define a string
var name= "Rahimi";
console.log(name);
var sentence = "I'm Happy"
var anotherSentence = 'He says "Hello"'
console.log(sentence);
console.log(anotherSentence);
var greetings = "Hello "+name;
console.log(greetings)

// 2) Second data type is number
//a = 10, b = 3 (line 4 and 5)
var minus = a - b;
var product = a * b;
var division = a / b;
var modulo = a % b; // 10 / 3 the balance is (baki = 1)
console.log(minus);
console.log(product);
console.log(division);
console.log(modulo);

//3) true or false
var ishungry = true;
var ispenat = false;
// AND Logic both need to be true (&&)
// OR Logic either one need to be true for it to be true (||)

var rehat = ishungry || ispenat;
console.log(rehat)

// Two control flow

// 1) If else
// comparison ==
if (ishungry == true){
  console.log("jom makan");
}
else {
  console.log("jom study")
}

// > <
var age = 5;
// either age < 18 or bigger then (otherwise dan lain lain....)
if (age < 18){
  console.log("You cannot watch the movie");
}
else {
  console.log("You can watch the movie");
}

if (age < 13){
  console.log("You cannot watch the movie with parent")
}
else {
  console.log("You can watch the movie!")
}

// Bring out value 19 is odd number
// 16 is an even number
var number = 19;

// modulo , comparison - if else
// baki nombor ganjil adalah satu
// number % 2 == 1

if ( 19 % 2 == 1){
  console.log(19 + " is and odd number");
}
else if ( 16 % 2 == 0){
  console.log(16 + " is an even number")
}


var userAge = 17;
var ticketprice = 110;

if (userAge < 19){
  console.log("The ticket price is " +ticketprice*0.5);
}
else if (userAge < 40){
  console.log("The ticket price is " +ticketprice);
}  
 else if (userAge < 65){
   consol.log("The ticket price is " +ticketprice*0.75);
   
 }
 else {
   console.log("The ticket price is " +ticketprice*0.5);
   
 }

// For loop (repitition) .. repeat this 10 times

// From 0 ; until 10; every iteration add by 1
for(var i = 0; i < 10; i++){
  console.log(i);
}

// From 10 ; ... until 0; every iteration minus 1
for (var i = 10; i > 0; i--){
  console.log(i);
}

// From 1, until 10.. every iteration add by 2
for (var i = 1; i < 10 ; i+=2){
  console.log(i)
}
var multiplier = 6;
var lines = 10;

for (var i = 1 ; i < lines+1 ; i++){
  console.log(i+"x"+multiplier + " = "+ multiplier*i)
}
