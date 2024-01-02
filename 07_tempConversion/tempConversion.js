const convertToCelsius = function (tempInFahrenheit) {
  // return Math.round((tempInFahrenheit - 32) * 5 / 9 * 10) / 10;
  let tempInCelsius = (tempInFahrenheit - 32) * 5 / 9;
  tempInCelsius = parseFloat(tempInCelsius.toFixed(1));
  return tempInCelsius;
};

const convertToFahrenheit = function (tempInCelsius) {
  tempInFahrenheit = tempInCelsius * 9 / 5 + 32;
  tempInFahrenheit = parseFloat(tempInFahrenheit.toFixed(1));
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
