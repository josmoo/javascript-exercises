const convertToCelsius = function(fTemperature) {
  return Math.round(10*((fTemperature - 32) * (5/9)))/10;
};

const convertToFahrenheit = function(cTemperature) {
  return Math.round(10*((cTemperature * 9/5) + 32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
