let q19_divCreated = false;
let q19_input = undefined;
let q19_ClassName = "q19-result";
let q19_ID = "CalenderedResult";
function q19Main() {
  q19_input_1 = document.getElementById("q19input1").value;
  q19_input_2 = document.getElementById("q19input2").value;
  q19_input_3 = document.getElementById("q19input3").value;
  if (
    (Number.isInteger(parseInt(q19_input_1)) &&
    Number.isInteger(parseInt(q19_input_2)) &&
    Number.isInteger(parseInt(q19_input_3)))
  ) {
    let dayOfWeek = getDayOfWeek(
      parseInt(q19_input_1),
      parseInt(q19_input_2),
      parseInt(q19_input_3)
    );
    result = "The day on this date is " + dayOfWeek + ".";
    q19_divCreated = updateResult(
      result,
      q19_ClassName,
      q19_ID,
      q19_divCreated
    );
  } else {
    //if one of the input is not an integer
    q19_divCreated = triggerError(
      "Error: One of the input is not an integer",
      q19_ClassName,
      q19_ID,
      q19_divCreated
    );
  }
}

function getDayOfWeek(year, month, day) {
    const date = new Date(year, month - 1, day);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }
  
  
  