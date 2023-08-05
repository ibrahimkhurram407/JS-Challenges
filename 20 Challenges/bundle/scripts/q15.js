let q15_divCreated = false;
let q15_input = undefined;
let q15_ClassName = "q15-result";
let q15_ID = "cuboid Volume";

function q15Main() {
  q15_input1 = document.getElementById("q15input1").value;
  q15_input2 = document.getElementById("q15input2").value;
  q15_input3 = document.getElementById("q15input3").value;
  if (Number.isInteger(parseInt(q15_input1)), Number.isInteger(parseInt(q15_input2)), Number.isInteger(parseInt(q15_input3))) {
    let volume = cuboidVolumeCalculator(parseInt(q15_input1), parseInt(q15_input2), parseInt(q15_input3))
    result = "Volume of Cuboid is " + volume + " units<sup>3</sup>"
    q15_divCreated = updateResult(result, q15_ClassName, q15_ID, q15_divCreated);
  } else {
    // input is not an integer, show error message
    q15_divCreated = triggerError(
      "Error: input is not an integer",
      q15_ClassName,
      q15_ID,
      q15_divCreated
    );
  }
}


function cuboidVolumeCalculator(v1,v2,v3) {
    let result = v1 * v2 * v3;
    return result
}