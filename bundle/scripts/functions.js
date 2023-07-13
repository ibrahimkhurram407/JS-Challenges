function updateResult (result, ClassName, ID, divCreated){
    if (divCreated == false) {
      const result = document.getElementsByClassName(ClassName)[0];
      let p = document.createElement("p");
      p.setAttribute("id", ID);
      p.innerHTML = result;
      result.appendChild(p);
      divCreated = true;
    } else {
      if (boolean == false) {
        document.getElementById(ID).innerHTML = result;
      }else {
        document.getElementById(ID).innerHTML = result;
      }
    }
  }

  setInterval(removeErrorTags, 3000);

  function removeErrorTags() {
    let errorTags = document.querySelectorAll("p#error");
    errorTags.forEach((tag)=> {
      tag.remove();
    });
  }