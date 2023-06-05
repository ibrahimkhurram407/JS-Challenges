let q2_divCreated = false;
let q2_input = undefined;
let q2_AllowStatement = "You are an adult";
let q2_RestrictionStatement = "You are not an adult";
let q2_ClassName = "q2-result";
let q2_ID = "q2input";
document.getElementById

function q2Main() {
  q2_input = document.getElementById(q2_ID).value;
  if (Number.isInteger(parseInt(q2_input))) {
    if (q2_input > 18) {
      let q2_restriction = false; //the user is an adult
      kdc(q2_restriction);
    } else if (q2_input < 18) {
      let q2_restriction = true; //the user is not an adult
      kdc(q2_restriction);
    }
  } else {
    // input is not an integer, show error message
    let q2_errorMessage = document.createElement("p");
    q2_errorMessage.innerText = "Error: input is not an integer";
    q2_errorMessage.style.color = "red";
    document.querySelector(q2_ID).appendChild(q2_errorMessage);
  }
}

function Q2Calculater (q2_restriction) {
  if (q2_restriction === true) {
    return ("You are not an Adult!")
  }else {
    return ("You are an Adult!")
  }
}

function kdc (restriction) {
  let q2_Statement = Q2Calculater(restriction);
    updateResult(
      q2_Statement,
      q2_ClassName,
      q2_ID,
      q2_divCreated
    );
}