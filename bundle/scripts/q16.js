let q16_divCreated = false;
let q16_input = undefined;
let q16_ClassName = "q16-result";
let q16_ID = "cuboidVolume";

function q16Main() {
  q16_input1 = document.getElementById("q16input1").value;
  q16_input2 = document.getElementById("q16input2").value;
  if (q16_input1 == "" && q16_input2 == "") {
    result = "Flight " + q16_input1 + "has landed " + q16_input2 + ".";
    q16_divCreated = updateResult(result, q16_ClassName, q16_ID, q16_divCreated);
  } else {
    //one of the input is empty
    q16_divCreated = triggerError(
      "Error: None input can be empty",
      q16_ClassName,
      q16_ID,
      q16_divCreated
    );
  }
}