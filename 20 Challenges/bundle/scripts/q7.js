let q7_divCreated = false; //doesnt matter
let q7_input = undefined;
let q7_ClassName = "q7-result";
let q7_ID = "iteration7";

function q7Main() {
  q7_input = document.getElementById("q7input").value;
  if (q7_input != undefined, q7_input != null, q7_input != "") {
    let result = []
  for (let i=0; i< 15; i++) {
    result.push(q7_input);
  }
  q7_divCreated = updateResult(result, q7_ClassName, q7_ID, q7_divCreated, true);
  }else {
    //if input is not an integer
    q7_divCreated = triggerError(
      "Error: Input is not an integer",
      q7_ClassName,
      q7_ID,
      q7_divCreated
    );
  }
}