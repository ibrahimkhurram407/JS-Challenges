function updateResult(result, ClassName, ID, divCreated, add, times) {
  add = add || false;
  times = times || 15;
  if (add) {
    hideError("div", ID);
    return loopResult(result, ClassName, ID, divCreated, times)
    exit
  } else {
    hideError("p", ID);
    return showResult(result, ClassName, ID, divCreated);
    exit
  }
}

function hideError(type, ID) {
  if (type === "p") {
    const errorP = document.getElementById('p:' + ID);
    if (errorP) {
      errorP.style.display = "none";
    }
  } else if (type === "div") {
    const errorDiv = document.getElementById('div:' + ID);
    if (errorDiv) {
      errorDiv.style.display = "none";
    }
  }
}

function loopResult(result, ClassName, ID, divCreated, times) {
  const parentDiv = document.getElementsByClassName(ClassName)[0];
  const divArray = []; // Create an empty array to store the div elements

  for (let i = 0; i < times; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.setAttribute("id", ID);
    p.innerHTML = result;
    div.appendChild(p);
    div.setAttribute("id", 'div:' + ID);
    parentDiv.appendChild(div);
    divArray.push(div); // Add the created div to the array
  }

  setTimeout(function () {
    divArray.forEach((D) => {
      D.remove();
    });
  }, 3000);
}



function showResult(result, ClassName, ID, divCreated) {
  if (divCreated == false) {
    const div = document.getElementsByClassName(ClassName)[0];
    let p = document.createElement("p");
    p.setAttribute("id", ID);
    p.innerHTML = result;
    div.appendChild(p);
    return true;
  } else {
    document.getElementById(ID).innerHTML = result;
    return true;
  }
}

function triggerError(error, parentClassname, resultID, divCreated) {
  console.log(
    "triggering error with this parameters: " + " | " +
      error + " | " +
      parentClassname + " | " +
      resultID + " | " +
      divCreated +  " | "
  );
  if (divCreated) {
    let rm = document.getElementById(resultID);
    let parent = document.getElementsByClassName(parentClassname)[0];
    parent.removeChild(rm);
    return false; //declaring divCreated = false;
  }
  let errorMessage = document.createElement("p");
  errorMessage.innerText = error;
  errorMessage.style.color = "red";
  errorMessage.setAttribute("id", "p:" + resultID);
  document.getElementsByClassName(parentClassname)[0].appendChild(errorMessage);
  setTimeout(function () {
    removeError(parentClassname, "p:" + resultID);
  }, 3000);
  return divCreated;
}

function removeError(parentClassname, errorID) {
  var parent = document.getElementsByClassName(parentClassname)[0];
  console.log(errorID);
  let errorTag = document.getElementById(errorID);
  if (errorTag && errorTag.parentNode === parent) {
    parent.removeChild(errorTag); // Remove the <p> tag with the id "error" from the parent div.
  }
}
