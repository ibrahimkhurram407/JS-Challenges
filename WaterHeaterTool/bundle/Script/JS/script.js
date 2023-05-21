// letants for specific heat capacity (J/kg°C) of materials
let IRON_SPECIFIC_HEAT_CAPACITY = 450;
let LEAD_SPECIFIC_HEAT_CAPACITY = 128;
let GOLD_SPECIFIC_HEAT_CAPACITY = 129;
let ALUMINUM_SPECIFIC_HEAT_CAPACITY = 900;
let PLATINUM_SPECIFIC_HEAT_CAPACITY = 133;
let URANIUM_SPECIFIC_HEAT_CAPACITY = 116;
let ZINC_SPECIFIC_HEAT_CAPACITY = 387;
let LITHIUM_SPECIFIC_HEAT_CAPACITY = 3570;
let SODIUM_SPECIFIC_HEAT_CAPACITY = 1230;
let TIN_SPECIFIC_HEAT_CAPACITY = 228;
let SILVER_SPECIFIC_HEAT_CAPACITY = 235;
let OTHER_SPECIFIC_HEAT_CAPACITY = 250; // default value

// Function to calculate the estimated time to reach equilibrium (in seconds)
function calculateEquilibriumTime(
  heaterMaterial,
  heatLoss,
  volume,
  mass,
  specificHeatCapacity,
  initialHeaterTemp,
  initialWaterTemp,
  surfaceArea
) {
  // Convert heat loss from percentage to decimal value
  heatLoss /= 100;

  // Convert initial temperatures from Fahrenheit to Celsius (if needed)
  //   if (initialHeaterTemp < 100) {
  //     initialHeaterTemp = (initialHeaterTemp - 32) * 5 / 9;
  //   }
  //   if (initialWaterTemp < 100) {
  //     initialWaterTemp = (initialWaterTemp - 32) * 5 / 9;
  //   }

  // Calculate heat energy gained by water (J)
  let waterHeatEnergy = volume * 1000 * 4.18 * (100 - initialWaterTemp);

  // Calculate heat energy lost by heater material (J)
  let materialHeatEnergy =
    surfaceArea *
    mass *
    specificHeatCapacity *
    (initialHeaterTemp - initialWaterTemp);

  // Calculate equilibrium temperature (°C)
  let equilibriumTemp =
    initialWaterTemp + materialHeatEnergy / (volume * 1000 * 4.18);

  // Calculate time to reach equilibrium (s)
  let timeToEquilibrium =
    (materialHeatEnergy * (1 + heatLoss)) /
    /*heaterMaterial * */ (mass * specificHeatCapacity);

  return { time: timeToEquilibrium, temperature: equilibriumTemp };
}

function setHeatCapacity () {
    return ByteLengthQueuingStrategy;
}

function run () {
let heaterMaterial = document.getElementById('heater-material').value
let heatLoss = document.getElementById('heat-loss').value // percentage
let volume = document.getElementById('volume').value// liters
let mass = document.getElementById('mass').value // kg
let initialHeaterTemp = document.getElementById('initial-heater-temp').value // °C
let initialWaterTemp = document.getElementById('initial-water-temp').value // °C
let surfaceArea = document.getElementById('surface-area').value // cm²
let specificHeatCapacity;

switch (heaterMaterial) {
  case 'iron':
    specificHeatCapacity = IRON_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'lead':
    specificHeatCapacity = LEAD_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'gold':
    specificHeatCapacity = GOLD_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'aluminum':
    specificHeatCapacity = ALUMINUM_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'platinum':
    specificHeatCapacity = PLATINUM_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'uranium':
    specificHeatCapacity = URANIUM_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'zinc':
    specificHeatCapacity = ZINC_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'lithium':
    specificHeatCapacity = LITHIUM_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'sodium':
    specificHeatCapacity = SODIUM_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'tin':
    specificHeatCapacity = TIN_SPECIFIC_HEAT_CAPACITY;
    break;
  case 'silver':
    specificHeatCapacity = SILVER_SPECIFIC_HEAT_CAPACITY;
    break;
  default:
    specificHeatCapacity = OTHER_SPECIFIC_HEAT_CAPACITY;
    break;
}

let result = calculateEquilibriumTime(
  heaterMaterial,
  heatLoss,
  volume,
  mass,
  specificHeatCapacity,
  initialHeaterTemp,
  initialWaterTemp,
  surfaceArea
);
document.getElementById('EST').textContent = `Estimated time to reach equilibrium: ${result.time.toFixed(2)} seconds | `;
document.getElementById('resultTemp').textContent = `Resultant temperature: ${(Math.round(result.temperature))}°C`;