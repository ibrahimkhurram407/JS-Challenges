function updateResult(result, ClassName, ID, divCreated) {
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
  console.log("triggering error with this parameters: " + error + parentClassname + resultID + divCreated);
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
  setTimeout(function() {
    removeError(parentClassname);
  }, 3000);  
  return divCreated
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
