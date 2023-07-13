let q1_divCreated = false;
let q1_input = undefined;
let q1_StatementStart = "It's PM";
let q1_StatementEnd = "It's PM";
let q1_ClassName = "q1-result";
let q1_ID = "CalculatedMonitors";


function q1Main() {
  let q1_input = document.getElementById("q1input").value;

  if (Number.isInteger(parseInt(q1_input))) {
    let q1_monitors = q1_input * 5; //calculations done
    if (q1_divCreated == false) {
      const q1_result = document.getElementsByClassName(q1_ClassName)[0];
      let p = document.createElement("p");
      p.setAttribute("id", q1_ID);
      p.innerHTML = `Calculated Result is ${q1_monitors} Monitors`;
      q1_result.appendChild(p);
      q1_divCreated = true;
    } else {
      document.getElementById(q1_ID).innerHTML = `Calculated Result is ${q1_monitors} Monitors`;
    }
  } else {
    // input is not an integer, show error message
    if (q1_divCreated) {
        let rm = document.getElementById(q1_ID);
        let parent = document.getElementsByClassName(q1_ClassName)[0];
        parent.removeChild(rm);
        q1_divCreated = false;
    }
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    errorMessage.setAttribute("id", "error");
    document.getElementsByClassName(q1_ClassName)[0].appendChild(errorMessage);
  }
}


// updateResult (result, ClassName, ID, divCreated)