/******************************************
*   passingAverage();
*
*   Purpose: Adds all the unknown parameters and calculate the average then returns true if average is > 49
******************************************/

var passingAverage = function(){
  
  var sum = 0, cnt = arguments.length;
  var ret = false;
  
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
    sum += arguments[i];
  }
  
  console.log(cnt)
  sum = sum / cnt;
  if(sum > 49)
    ret = true;
  else 
    ret;
  
  console.log(sum)
  
  return ret;
}


console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));
