let q8_divCreated = false;
let q8_input = undefined;
let q8_ClassName = "q8-result";
let q8_ID = "iteration8";

function q8Main() {
  let roomNumbers = [];
  for (let i = 1; i <= 15; i++) {
    if (i !== 13) {
      roomNumbers.push(i);
    }
  }

  q8_divCreated = updateResult(
    roomNumbers.join("\n"), // Join the room numbers with a newline for separate lines
    q8_ClassName,
    q8_ID,
    q8_divCreated
  );
}