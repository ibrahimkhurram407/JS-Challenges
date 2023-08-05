let q1_divCreated = false;
let q1_input = undefined;
let q1_StatementStart = "It's PM";
let q1_StatementEnd = "It's PM";
let q1_ClassName = "q1-result";
let q1_ID = "CalculatedMonitors";

function q1Main() {
  let q1_input = document.getElementById("q1input").value;

  if (Number.isInteger(parseInt(q1_input))) {
    let q1_monitors = q1_input * 5; //calculations done
    let q1_result = `Calculated Result is ${q1_monitors} Monitors`;
    q1_divCreated = updateResult (q1_result, q1_ClassName, q1_ID, q1_divCreated);
  } else {
    // input is not an integer, show error message
    q1_divCreated = triggerError("Error: input is not an integer", q1_ClassName, q1_ID, q1_divCreated);
  }
}