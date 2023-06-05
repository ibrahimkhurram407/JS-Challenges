let divCreated = false;
let input = undefined;
let AllowStatement = "It's AM";
let RestrictionStatement = "It's PM";
let ClassName = "q3-result";
let ID = "AgeFactor";
function q3Main() {
  let input = document.getElementById("q3input").value;
  if (Number.isInteger(parseInt(input))) {
    if (input > 18) {
      let restriction = false; //the user is an adult
      updateResult(
        restriction,
        RestrictionStatement,
        AllowStatement,
        ClassName,
        ID,
        divCreated
      );
    } else if (input < 18) {
      let restriction = true; //the user is not an adult
      updateResult(
        restriction,
        RestrictionStatement,
        AllowStatement,
        ClassName,
        ID,
        divCreated
      );
    }
  } else {
    // input is not an integer, show error message
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    document.querySelector(ID).appendChild(errorMessage);
  }
}
