let q10_divCreated = false;
let q10_input1 = undefined;
let q10_input2 = undefined;
let q10_ClassName = "q10-result";
let q10_ID = "result10";

function checkRange(value1, value2) {
  return value1 && value2;
}

function q10Main() {
  q10_input1 = document.getElementById("q10input1").checked;
  q10_input2 = document.getElementById("q10input2").checked;
  let isInRange = checkRange(q10_input1, q10_input2);
  q10_divCreated = updateResult(
    isInRange.toString(),
    q10_ClassName,
    q10_ID,
    q10_divCreated
  );
}