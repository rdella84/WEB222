/******************************************
*   evenNumbers(minNumber, maxNumber);
*
*   Purpose:  Takes the minNumber and incremented by 2 until the maxNumber
*******************************************/

var evenNumbers = function(minNumber, maxNumber){
  var str = "";
  if(maxNumber % 2 !== 0){
    maxNumber--;
  }

  
  for(var i = minNumber; i <= maxNumber; i+=2){
   str += i + ", ";
   
  }
  return str = str.replace(/,\s*$/, "");
}


console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));




