let divCreated = false;
let input = undefined;
let AllowStatement = "You are an adult";
let RestrictionStatement = "You are not an adult";
let ClassName = "q2-result";
let ID = "AgeFactor";

function q2Main() {
  let input = document.getElementById("q2input").value;
  if (Number.isInteger(parseInt(input))) {
    if (input > 18) {
      let restriction = false; //the user is an adult
      kdc(restriction);
    } else if (input < 18) {
      let restriction = true; //the user is not an adult
      kdc(restriction);
    }
  } else {
    // input is not an integer, show error message
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    document.querySelector(ID).appendChild(errorMessage);
  }
}

function Q2Calculater (restriction) {
  if (restriction === true) {
    return ("You are not an Adult!")
  }else {
    return ("You are an Adult!")
  }
}

function kdc (restriction) {
  let Statement = Q2Calculater(restriction);
    updateResult(
      Statement,
      ClassName,
      ID,
      divCreated
    );
}