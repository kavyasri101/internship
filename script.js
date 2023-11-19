// script.js
function convertTemperature() {
    let temperatureInput = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let resultElement = document.getElementById('result');
  
    if (isNaN(temperatureInput)) {
      resultElement.textContent = 'Please enter a valid number.';
      return;
    }
  
    let convertedTemperatures = convert(temperatureInput, unit);
  
    resultElement.textContent = `Celsius: ${convertedTemperatures.celsius.toFixed(2)}°C, Fahrenheit: ${convertedTemperatures.fahrenheit.toFixed(2)}°F, Kelvin: ${convertedTemperatures.kelvin.toFixed(2)}K`;
  }
  
  function convert(temperature, unit) {
    let celsius, fahrenheit, kelvin;
  
    switch (unit) {
      case 'celsius':
        celsius = parseFloat(temperature);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        break;
      case 'fahrenheit':
        fahrenheit = parseFloat(temperature);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        break;
      case 'kelvin':
        kelvin = parseFloat(temperature);
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        break;
      default:
        throw new Error('Invalid unit selected.');
    }
  
    return { celsius, fahrenheit, kelvin };
  }
  