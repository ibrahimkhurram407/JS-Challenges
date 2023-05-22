let q1divCreated = false;

function q1Main() {
  let input = document.getElementById("q1input").value;

  if (Number.isInteger(parseInt(input))) {
    let monitors = input * 5; //calculations done
    if (q1divCreated == false) {
      const result = document.getElementsByClassName("q1-result")[0];
      let p = document.createElement("p");
      p.setAttribute("id", "calculatedMonitors");
      p.innerHTML = `Calculated Result is ${monitors} Monitors`;
      result.appendChild(p);
      q1divCreated = true;
    } else {
      document.getElementById("calculatedMonitors").innerHTML = `Calculated Result is ${monitors} Monitors`;
    }
  } else {
    // input is not an integer, show error message
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    document.querySelector(".result").appendChild(errorMessage);
  }
}