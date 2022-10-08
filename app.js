/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
window.location.reload()
*/
let unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let weightResult = document.getElementById("weight-result");
const clearBtn = document.getElementById("clear-button");

convertBtn.addEventListener("click", function () {
  let mainUnit = Number(unitInput.value);

  lengthResult.innerHTML = `
    <p>
        ${mainUnit} meters = ${(mainUnit * 3.281).toFixed(2)} feet | 
        ${mainUnit} feet = ${(mainUnit / 3.281).toFixed(2)} meters
    </p>
  `;

  volumeResult.innerHTML = `
      <p>
        ${mainUnit} liters = ${(mainUnit * 0.264).toFixed(2)} gallons | 
        ${mainUnit} gallons = ${(mainUnit / 0.264).toFixed(2)} liters
    </p>      
  `;

  weightResult.innerHTML = `
      <p>
        ${mainUnit} kilos = ${(mainUnit * 2.204).toFixed(2)} pounds | 
        ${mainUnit} pounds = ${(mainUnit / 2.204).toFixed(2)} kilos
    </p>      
  `;

  unitInput.value = "";
});

clearBtn.addEventListener("click", function () {
  window.location.reload();
});
