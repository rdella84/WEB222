/******************************************
*    showMultiples(num, numMultiples);
*
*   Purpose:  Multiplies the first parameter with the second parameter
*******************************************/

function showMultiples(num, numMultiple){
  var prtOut, retVal;
  var sum, mult = 1;
  
  for(var i=0; i < numMultiple; i++){
    prtOut = ((num) + " x " + (mult) + " = ");
    sum = num * mult;
    retVal = prtOut + sum + "\n";
  }
  
  return retVal;
  
}


console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));