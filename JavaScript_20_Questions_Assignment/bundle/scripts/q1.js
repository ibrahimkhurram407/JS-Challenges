let divCreated = false;

function q1Main() {
  let input = document.getElementById("q1input").value;

  if (Number.isInteger(parseInt(input))) {
    let monitors = input * 5; //calculations done
    if (divCreated == false) {
      const result = document.getElementsByClassName("result")[0];
      let p = document.createElement("p");
      p.setAttribute("id", "calculatedMonitors");
      p.innerHTML = `Calculated Result is ${monitors} Monitors`;
      result.appendChild(p);
    } else {
      document.getElementById("calculatedMonitors").innerHTML = monitors;
    }
  } else {
    // input is not an integer, show error message
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    document.querySelector(".result").appendChild(errorMessage);
  }
}