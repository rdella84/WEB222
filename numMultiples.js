/******************************************
*    showMultiples(num, numMultiples);
*
*   Purpose:  Multiplies the first parameter with the second parameter
*******************************************/

function showMultiples(num, numMultiple){
  var prtOut, retVal = "";
  var sum, mult = 1;

 
  
  for(var i=0; i < numMultiple; i++){
    sum = num * mult;
    prtOut = ("\n" + (num) + " x " + (mult) + " = " + sum);
   
    retVal += prtOut;
    mult++; 
  }
  
  return retVal;
}
console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
