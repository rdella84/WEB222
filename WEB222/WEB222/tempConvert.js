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


console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));