/******************************************
*   evenNumbers(minNumber, maxNumber);
*
*   Purpose:  Takes the minNumber and incremented by 2 until the maxNumber
*******************************************/

var evenNumbers = function(minNumber, maxNumber){
  var str = [];
  if(maxNumber % 2 !== 0){
    maxNumber--;
  }
  
  for(var i= minNumber; i < maxNumber; i++){
   str[i] = minNumber + 2;
   var strcontner = str[i].concat(minNumber + 2);
  }
  return strcontner;
}


console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
//console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
//console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));




