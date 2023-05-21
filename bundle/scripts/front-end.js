const expandAllButton = document.getElementById("expand-all-button");
const accordionItems = document.querySelectorAll(".accordion-item");
let toggleState = false;
expandAllButton.addEventListener("click", () => {
    accordionItems.forEach((item) => {
        const accordionBody = item.querySelector(".accordion-body");
        const accordionCollapse = item.querySelector(".accordion-collapse");
        if (toggleState == false) {
          toggleState = true;
        }else {
          toggleState = false;
        }
        if (accordionCollapse.classList.contains("show")) {
            accordionBody.style.height = "0px";
            if (toggleState !== true) {
              accordionCollapse.classList.remove("show");
            }
        } else {
            if (toggleState == true ) {
              accordionCollapse.classList.add("show");
              accordionBody.style.height = accordionBody.scrollHeight + "px";
            }
        }
    });
});

//navigation bar scroll feature
 function scrollToQuestion(question) {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const questionTop = document.querySelector(question).offsetTop - navbarHeight - 20; // adjust for 10px above question
  window.scrollTo({top: questionTop, behavior: 'smooth',duration: 1000});
}