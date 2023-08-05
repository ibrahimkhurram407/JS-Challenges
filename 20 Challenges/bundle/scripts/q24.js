let q24_divCreated = false;
let q24_input1 = undefined;
let q24_input2 = undefined;
let q24_ClassName = "q24-result";
let q24_ID = "q24_loginSignup";

function checkPasswords() {
  q24_input1 = document.getElementById("q24_password1").value;
  q24_input2 = document.getElementById("q24_password2").value;

  if (q24_input1 === "" || q24_input2 === "") {
    q24_divCreated = updateResult("Error: Input fields cannot be blank.", q24_ClassName, q24_ID, q24_divCreated);
  } else if (q24_input1 === q24_input2) {
    q24_divCreated = updateResult("Passwords match.", q24_ClassName, q24_ID, q24_divCreated);
  } else {
    q24_divCreated = updateResult("Passwords do not match.", q24_ClassName, q24_ID, q24_divCreated);
  }
}


function togglePasswordVisibility() {
    const passwordInputs = document.querySelectorAll(".password");
    const showPasswordCheckbox = document.getElementById("q24_showPassword");
  
    passwordInputs.forEach((input) => {
      if (showPasswordCheckbox.checked) {
        input.type = "text"; // Change input type to 'text' to show password
      } else {
        input.type = "password"; // Change input type back to 'password' to hide password
      }
    });
  }