let q3_divCreated = false;
let q3_input = undefined;
let q3_AllowStatement = "It's AM";
let q3_RestrictionStatement = "It's PM";
let q3_ClassName = "q3-result";
let q3_ID = "q3input";

function q3Main() {
  q3_input = document.getElementById(q3_ID).value;
  if (Number.isInteger(parseInt(q3_input))) {
    if (q3_input > 18) {
      let q3_restriction = false; //the user is an adult
      updateResult(
        q3_restriction,
        q3_RestrictionStatement,
        q3_AllowStatement,
        q3_ClassName,
        q3_ID,
        q3_divCreated
      );
    } else if (q3_input < 18) {
      let q3_restriction = true; //the user is not an adult
      updateResult(
        q3_restriction,
        q3_RestrictionStatement,
        q3_AllowStatement,
        q3_ClassName,
        q3_ID,
        q3_divCreated
      );
    }
  } else {
    // input is not an integer, show error message
    let q3_errorMessage = document.createElement("p");
    q3_errorMessage.innerText = "Error: input is not an integer";
    q3_errorMessage.style.color = "red";
    document.querySelector(q3_ID).appendChild(q3_errorMessage);
  }
}
