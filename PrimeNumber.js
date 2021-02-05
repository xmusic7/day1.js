function isPrime(num){
  // 1) Kita assume nombor ini prime
  
  var answer = true;
  // 2) Create test to prove our assumption wrong
  // list down all the number between 2 and itself
  for (var i = 2; i < num; i ++){
    
    // check if the number is divisible by 1 .. once its is divisible by a number it is false -> My assumption is wrong
    if(num % i == 0){
      return false;
    }
  }
  // 3) return our answer
  return answer;
}

for (var i = 2; i < 1000; i++){
  if (isPrime(i)){
    console.log
  }
}
