let q9_divCreated = false;
let q9_input = undefined;
let q9_ClassName = "q9-result";
let q9_ID = "reminder";

function reminder(event) {
  return "You set a reminder about " + event;
}

function q9Main() {
  q9_input = document.getElementById("q9input").value;
  q9_divCreated = updateResult(
    reminder(q9_input),
    q9_ClassName,
    q9_ID,
    q9_divCreated
  );
}