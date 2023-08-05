let q4_divCreated = false;
let q4_input = undefined;
let q4_AllowStatement = "It's AM";
let q4_RestrictionStatement = "It's PM";
let q4_ClassName = "q4-result";
let q4_ID = "mphtompm";




function calculateTime(distance) {
    const speed = 40; // miles per hour
    const timeInHours = distance / speed;
    const timeInMinutes = timeInHours * 60;
    return timeInMinutes;
  }
  
  function q4Main() {
    q4_input = document.getElementById("q4input").value;
    if (Number.isInteger(parseInt(q4_input))) {
      const distance = parseInt(q4_input);
      const timeInMinutes = calculateTime(distance);
      const resultMessage = `It will take ${timeInMinutes} minutes to cover ${distance} miles.`;
      q4_divCreated = updateResult(resultMessage, q4_ClassName, q4_ID, q4_divCreated);
    } else {
      // input is not an integer, show error message
      q4_divCreated = triggerError(
        "Error: input is not an integer",
        q4_ClassName,
        q4_ID,
        q4_divCreated
      );
    }
  }