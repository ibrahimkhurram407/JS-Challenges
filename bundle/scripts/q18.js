let q18_divCreated = false;
let q18_input = undefined;
let q18_ClassName = "q18-result";
let q18_ID = "cuboidVolume";

function q18Main() {
    q18_input = document.getElementById("q18input").value;
    if (Number.isInteger(parseInt(q18_input))) {
      let century = centuryCalculator(parseInt(q18_input));
      result = "The year is from " + century + " century.";
      q18_divCreated = updateResult(result, q18_ClassName, q18_ID, q18_divCreated);
    } else {
      //if input is not an integer
      q18_divCreated = triggerError(
        "Error: Input is not an integer",
        q18_ClassName,
        q18_ID,
        q18_divCreated
      );
    }
  }

function centuryCalculator(input) {
    return Math.round(input/100)*100/100;
}