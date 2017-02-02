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







var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());

