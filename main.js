

//click event
document.getElementById("submit").addEventListener('click', convert);
document.getElementById("reset").addEventListener('click', reset);

//global variable
let chosenTemp;

//listens for an input field to change, and then changes chosenTemp to that field
document.getElementById("celsius").onchange = () => chosenTemp = "celsius";

document.getElementById("fahrenheit").onchange = () => chosenTemp = "fahrenheit";

document.getElementById("kelvin").onchange = () => chosenTemp = "kelvin";

document.getElementById("rankine").onchange = () => chosenTemp = "rankine";

//reset all values
function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("rankine").value = "";
}


//conversion function
function convert() {

  //local variables
  let celsius = document.getElementById("celsius").value;
  celsius = parseFloat(celsius);

  let fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseFloat(fahrenheit);

  let kelvin = document.getElementById("kelvin").value;
  kelvin = parseFloat(kelvin);

  let rankine = document.getElementById("rankine").value;
  rankine = parseFloat(rankine);

  //temp values
  let conversionC;
  let conversionF;
  let conversionK;
  let conversionR;

  //if the celsius field changes, convert the other values
  if (chosenTemp === "celsius") {
    conversionF = celsius * 9 / 5 + 32;
    conversionK = celsius + 273.15;
    conversionR = conversionF + 459.67;
    //round the converted values
    document.getElementById("fahrenheit").value = conversionF.toFixed(2);
    document.getElementById("kelvin").value = conversionK.toFixed(2);
    document.getElementById("rankine").value = conversionR.toFixed(2);
  } 
    //if the fahrenheit field changes, convert the other values
    else if (chosenTemp === "fahrenheit") {
    conversionC = (fahrenheit - 32) * 5 / 9;
    conversionK = conversionC + 273.15;
    conversionR = fahrenheit + 459.67;
    //round the converted values
    document.getElementById("celsius").value = conversionC.toFixed(2);
    document.getElementById("kelvin").value = conversionK.toFixed(2);
    document.getElementById("rankine").value = conversionR.toFixed(2);
  } 
    //if the kelvin field changes, convert the other values
    else if (chosenTemp === "kelvin") {
    conversionK = kelvin;
    conversionC = kelvin - 273.15;
    conversionF = conversionC * 9 / 5 + 32;
    conversionR = conversionF + 459.67;
    //round the converted values
    document.getElementById("celsius").value = conversionC.toFixed(2);
    document.getElementById("fahrenheit").value = conversionF.toFixed(2);
    document.getElementById("rankine").value = conversionR.toFixed(2);
  }
    //if the rankine field changes, convert the other values
    else if (chosenTemp === "rankine") {
    conversionF = rankine - 459.67
    conversionC = (conversionF - 32) * 5 / 9;
    conversionK = conversionC + 273.15;
    //round the converted values
    document.getElementById("celsius").value = conversionC.toFixed(2);
    document.getElementById("fahrenheit").value = conversionF.toFixed(2);
    document.getElementById("kelvin").value = conversionK.toFixed(2);
  }

  //return the converted values
  document.getElementById("celsius").innerHTML = conversionC;
  document.getElementById("fahrenheit").innerHTML = conversionF;
  document.getElementById("kelvin").innerHTML = conversionK;
  document.getElementById("rankine").innerHTML = conversionR;

  if (conversionK === 0 || conversionR === 0) {
      alert("You have reached absolute zero, the coldest theoretical temperature in existence.");
      reset();
  }
    else if (conversionK < 0 || conversionR < 0) {
        alert("There must be a typo, this is an impossible temperature. Please try again.");
        reset();
    }

}


