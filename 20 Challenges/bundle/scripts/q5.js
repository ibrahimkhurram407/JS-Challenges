let q5_divCreated = false;
let q5_input = undefined;
let q5_AllowStatement = "new record";
let q5_RestrictionStatement = "not this time";
let q5_ClassName = "q5-result";
let q5_ID = "highJumpResult";
let q5_record = 2.5;

function q5Main() {
  q5_input = parseFloat(document.getElementById("q5input").value);
  if (!isNaN(q5_input)) {
    if (q5_input > q5_record) {
      q5_divCreated = updateResult(q5_AllowStatement, q5_ClassName, q5_ID, q5_divCreated);
      q5_record = q5_input;
    } else {
      q5_divCreated = updateResult(q5_RestrictionStatement, q5_ClassName, q5_ID, q5_divCreated);
    }
  } else {
    // input is not a number, show error message
    q5_divCreated = triggerError(
      "Error: input is not a valid number",
      q5_ClassName,
      q5_ID,
      q5_divCreated
    );
  }
}