let q2_divCreated = false;
let q2_input = undefined;
let q2_AllowStatement = "You are an adult";
let q2_RestrictionStatement = "You are not an adult";
let q2_ClassName = "q2-result";
let q2_ID = "AgeRestrictionCalculator";

function checkIfAdult(age) {
  return age >= 18;
}

function q2Main() {
  q2_input = document.getElementById("q2input").value;
  if (Number.isInteger(parseInt(q2_input))) {
    let isAdult = checkIfAdult(q2_input);
    let resultMessage = isAdult ? q2_AllowStatement : q2_RestrictionStatement;
    q2_divCreated = updateResult(
      resultMessage,
      q2_ClassName,
      q2_ID,
      q2_divCreated
    );
  } else {
    // input is not an integer, show error message
    q1_divCreated = triggerError(
      "Error: input is not an integer",
      q2_ClassName,
      q2_ID,
      q2_divCreated
    );
  }
}
