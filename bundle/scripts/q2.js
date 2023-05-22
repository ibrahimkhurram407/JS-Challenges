let q2divCreated = false;

function updateResult (restriction){
  if (q2divCreated == false) {
    const result = document.getElementsByClassName("q2-result")[0];
    let p = document.createElement("p");
    p.setAttribute("id", "AgeFactor");
    if (restriction == false) {
      p.innerHTML = 'You are an Adult';
    }else {
      p.innerHTML = 'You are not an Adult';
    }
    result.appendChild(p);
    q2divCreated = true;
  } else {
    if (restriction == false) {
      document.getElementById("AgeFactor").innerHTML = 'You are an Adult';
    }else {
      document.getElementById("AgeFactor").innerHTML = 'You are not an Adult';
    }
  }
}

function q2Main() {
  let input = document.getElementById("q2input").value;

  if (Number.isInteger(parseInt(input))) {
    if (input > 18 ) {
        let restriction = false; //the user is an adult
        updateResult(restriction)
    }else if (input < 18) {
        let restriction = true; //the user is not an adult
        updateResult(restriction)
    }
  } else {
    // input is not an integer, show error message
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Error: input is not an integer";
    errorMessage.style.color = "red";
    document.querySelector(".result").appendChild(errorMessage);
  }
}