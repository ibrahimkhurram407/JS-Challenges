let q11_divCreated = false;
let q11_input1 = undefined;
let q11_input2 = undefined;
let q11_ClassName = "q11-result";
let q11_ID = "result11";
let areBothFalse = undefined;

function checkBothFalse(value1, value2) {
  return !value1 && !value2;
}

function q11Main() {
  q11_input1 = document.getElementById("q11input1").checked;
  q11_input2 = document.getElementById("q11input2").checked;
  areBothFalse = checkBothFalse(q11_input1, q11_input2);
  q11_divCreated = updateResult(
    areBothFalse.toString(),
    q11_ClassName,
    q11_ID,
    q11_divCreated
  );
}

function q11Main() {
    q11_input1 = document.getElementById("q11input1").value;
    q11_input2 = document.getElementById("q11input2").value;
    if (
      q11_input1 == true || false &&
      q11_input2 == true || false
    ) {
      let isInRange = checkRange(q11_input1, q11_input2);
      q11_divCreated = updateResult(
        isInrange.toString(),
        q11_ClassName,
        q11_ID,
        q11_divCreated
      );
    } else {
      // Some input Error
      q11_DivCreated = triggerError(
        "Error: Input seems invalid, possible techincal error. | Input Received: " + q11_input1 + " | " + q11_input2,
        q11_ClassName,
        q11_ID,
        q11_divCreated
      );
    }
  }