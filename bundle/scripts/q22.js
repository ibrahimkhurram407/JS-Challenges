let q22_divCreated = false;
let q22_input = undefined;
let q22_ClassName = "q22-result";
let q22_ID = "cuboidVolume";

function q22Main() {
    q22_input = document.getElementById("q22input").value;
    if (Number.isInteger(parseInt(q22_input))) {
      result = timesTable(parseInt(q22_input));
      q22_divCreated = updateResult(result, q22_ClassName, q22_ID, q22_divCreated, true);
    } else {
      //if input is not an integer
      q22_divCreated = triggerError(
        "Error: Input is not an integer",
        q22_ClassName,
        q22_ID,
        q22_divCreated
      );
    }
  }
  function timesTable(input) {
    let result = [];
    let line = "";
    for (let i = 1; i <= 12; i++) {
        line = input + " * " + i + ": " + input * i;
        result.push(line);
    }
    return result;
}