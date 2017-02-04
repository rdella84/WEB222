/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Regio Della Student ID: 109324160 Date: Feb 4, 2017
*
********************************************************************************/


/******************************************
*    grader(mark)
*
*   Purpose:  Turns the percentage into letter grades
*******************************************/

var grader = function(mark){
  var letter;
  
  if(mark >= 80){
    letter = 'A';
  }
  else if(mark >= 70){
    letter = 'B';
  }
  else if(mark >= 60){
    letter = 'C';
  }
  else if(mark >= 50){
    letter = 'D';
  }
  else if(mark >= 0){
    letter = 'F';
  }
  
  return letter;
}


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



/******************************************
*   tempConverter(temperature, convert);
*
*   Purpose:  Converts the temperature to Celsius or Farenheit
*******************************************/

function tempConvert(temperature, convert){
  if(convert === "CF"){
    temperature = ((temperature*9) / 5) + 32;
  }
  else if(convert === "FC"){
    temperature = ((temperature - 32) * 5) / 9;
  }
  return temperature.toFixed(1);
}



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



/******************************************
*   passingAverage();
*
*   Purpose: Adds all the unknown parameters and calculate the average then returns true if average is > 49
******************************************/

var passingAverage = function(){
  
  var sum = 0, cnt = arguments.length;
  var ret = false;
  
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  
  sum = sum / cnt;
  if(sum > 49)
    ret = true;
  else 
    ret; 
  return ret;
}

/******************************************
* counter() with countOne() as the nested function
*
* Purpose: In the counter function a num variable is created and initialized by 0
*          and the value is incremented by one inside the countOne function.
*          Everytime it is ran the old value is remembered and initilized again by 1 hense
*          each time its called the value increase by 1;
******************************************/

function counter(){
  var num = 0;
  function countOne(){
    num += 1;
    return num;
  };
  return countOne;
}


/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/

// Function 1 (grader)   

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");

// Function 2 (showMultiples)

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");

// Function 3 (largerNum)
  
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");

// Function 4 (tempConvert)

console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");

// Function 5 (evenNumbers)

console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");

// Function 6 (passingAverage)

console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");

// Functinon 7 (counter)

var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());