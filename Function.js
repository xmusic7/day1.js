//Funtion

/// 1) Declaring a function

function sayHello(){
  console.log ("Hello");
}

/// 2) Invoking or calling a function

sayHello();

// 3) Function with parameters

function goodbye(name){
  console.log("goodbye " +name);
}

// 4) Invoking function with parameters

goodbye("Muzaffar");
goodbye("Ashraf");
goodbye("Anas");

// 5) A function can return an answer

function some(a,b){
  return a+b;
}


// Calling function return an answer
var sum1 = sum(2,3);
console.log(sum1);

console.log(sum(3,4));

// 6) Returning more then one item/answers

function calculateAreaVolume(panjang,lebar,tinggi){
  return [panjang*lebar, panjang*lebar*tinggi];
}

console.log(calculateAreaVolume(2,3,4));

/// Array

var markah = [80,70,90,60,50];

// 1) Retreving an item from array
// Give the index of the array , index start with 0
console.log(markah[0]);
console.log(markah[4]);

// 2) Get the length of an Array
console.log(markah.length)

// 3) Add an item at the end of an array

markah.push(80);
console.log(markah);

// 4) Remove an item at the end of an array

markah.pop();
markah.log(markah);

for (var i = 0, i < markah.length ; i++){
  console.log("Item number "+(i+1) +" is " +markah[i]);
}
