for (var i = 1; i <= 100; i++) {
  
  var a = "";
  
  if ( i % 3 == 0) { a += "Fizz"; }
  if ( i % 5 == 0) { a += "Buzz"; }
  
  if (a == "") { a = i; }
  
  console.log(a);
}
