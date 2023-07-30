let q3_divCreated = false;
let q3_input = undefined;
let q3_AllowStatement = "It's AM";
let q3_RestrictionStatement = "It's PM";
let q3_ClassName = "q3-result";
let q3_ID = "AMPMDECIDER";

function checkIfAdult(age) {
  return age >= 11;
}

function q3Main() {
  q3_input = document.getElementById("q3input").value;
  if (Number.isInteger(parseInt(q3_input))) {
    if (parseInt(q3_input) > 23) {
      // input is bigger than 23, show error message
      q3_divCreated = triggerError(
        "Error: Number can't be bigger than 23",
        q3_ClassName,
        q3_ID,
        q3_divCreated
      );
    } else {
      let isAdult = checkIfAdult(q3_input);
      let resultMessage = isAdult ? q3_RestrictionStatement : q3_AllowStatement;
      console.log(q3_divCreated);
      q3_divCreated = updateResult(
        resultMessage,
        q3_ClassName,
        q3_ID,
        q3_divCreated
      );
    }
  } else {
    // input is not an integer, show error message
    q3_divCreated = triggerError(
      "Error: input is not an integer",
      q3_ClassName,
      q3_ID,
      q3_divCreated
    );
  }
}
