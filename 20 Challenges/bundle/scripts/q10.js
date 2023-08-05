let q10_divCreated = false;
let q10_input1 = undefined;
let q10_input2 = undefined;
let q10_ClassName = "q10-result";
let q10_ID = "result10";

function checkRange(value1, value2) {
  return value1 && value2;
}

function q10Main() {
  q10_input1 = document.getElementById("q10input1").value;
  q10_input2 = document.getElementById("q10input2").value;
  if (
    q10_input1 == true || false &&
    q10_input2 == true || false
  ) {
    let isInRange = checkRange(q10_input1, q10_input2);
    q10_divCreated = updateResult(
      isInrange.toString(),
      q10_ClassName,
      q10_ID,
      q10_divCreated
    );
  } else {
    // Some input Error
    q10_DivCreated = triggerError(
      "Error: Input seems invalid, possible techincal error. | Input Received: " + q10_input1 + " | " + q11_input2,
      q10_ClassName,
      q10_ID,
      q10_divCreated
    );
  }
}