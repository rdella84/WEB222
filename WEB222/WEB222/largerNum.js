/******************************************
*   largeNum(num1, num2);
*
*   Purpose:  Determines which number is higher or  NaN value and returns it
*******************************************/

var largerNum = function(num1, num2){
  var higher;
  if(num1 > num2 || typeof num1 == NaN){
    higher = num1;
  }
  else
    higher = num2;
  return higher;
}

console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));