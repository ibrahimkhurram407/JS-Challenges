function updateResult(result, ClassName, ID, divCreated, add, times) {
  add = add || false;
  times = times || 15;
  if (add) {
    return loopResult(result, ClassName, ID, divCreated, times)
    exit
  } else {
    return showResult(result, ClassName, ID, divCreated);
    exit
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
    "triggering error with this parameters: " +
      error +
      parentClassname +
      resultID +
      divCreated
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
  errorMessage.setAttribute("id", "error");
  document.getElementsByClassName(parentClassname)[0].appendChild(errorMessage);
  setTimeout(function () {
    removeError(parentClassname);
  }, 3000);
  return divCreated;
}

function removeError(parentClassname, tag) {
  var parent = document.getElementsByClassName(parentClassname)[0];
  let errorTags = document.querySelectorAll("p#error");
  errorTags.forEach((tag) => {
    if (tag && tag.parentNode === parent) {
      parent.removeChild(tag); // Remove the <p> tag with the id "error" from the parent div.
    }
  });
}