let q21_divCreated = false;
let q21_input = undefined;
let q21_ClassName = "q21-result";
let q21_ID = "dom";

function q21Main() {
    q21_input = document.getElementById("q21input").value;
    result = q21_input;
    q21_divCreated = updateResult(result, q21_ClassName, q21_ID, q21_divCreated);
  }