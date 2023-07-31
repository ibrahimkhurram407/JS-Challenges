let q7_divCreated = false;
let q7_input = undefined;
let q7_ClassName = "q7-result";
let q7_ID = "iteration7";

function q7Main() {
  q7_input = document.getElementById("q7input").value;
  q7_divCreated = updateResult(q7_input, q7_ClassName, q7_ID, q7_divCreated, true, 15);
}