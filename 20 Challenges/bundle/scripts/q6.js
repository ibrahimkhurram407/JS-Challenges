let q6_divCreated = false;
let q6_input = undefined;
let q6_ClassName = "q6-result";
let q6_ID = "themeResult";

function q6Main() {
  q6_input = document.getElementById("q6input").value;
  if (Number.isInteger(parseInt(q6_input))) {
    if (parseInt(q6_input) > 5) {
      // input is bigger than 5, show error message
      q6_divCreated = triggerError(
        "Error: Number can't be bigger than 5",
        q6_ClassName,
        q6_ID,
        q6_divCreated
      );
    } else {
      let theme;
      switch (parseInt(q6_input)) {
        case 1:
          theme = "Light";
          break;
        case 2:
          theme = "Dark";
          break;
        case 3:
          theme = "Nocturne";
          break;
        case 4:
          theme = "Terminal";
          break;
        case 5:
          theme = "Indigo";
          break;
        default:
          // invalid input, show error message
          q6_divCreated = triggerError(
            "Error: Please enter a valid theme number",
            q6_ClassName,
            q6_ID,
            q6_divCreated
          );
          return;
      }

      q6_divCreated = updateResult(theme, q6_ClassName, q6_ID, q6_divCreated);
    }
  } else {
    // input is not an integer, show error message
    q6_divCreated = triggerError(
      "Error: input is not an integer",
      q6_ClassName,
      q6_ID,
      q6_divCreated
    );
  }
}