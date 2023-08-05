let q17_array = ['Cinnamon Doughnuts','Waffles','Chocolage Brownie','Chorizo Burrity','French Toast'];
let q17_divCreated = false;
let q17_input = undefined;
let q17_ClassName = "q17-result";
let q17_ID = "cuboid Volume";

function q17Main() {
    q17_input = document.getElementById("q17input").value;
    if (Number.isInteger(parseInt(q17_input))) {
      q17_array[parseInt(q17_input)] = "Fluffy Pancakes"
      console.log(q17_array);
      result = "Element at Index " + q17_input + " has been Changed to Fluffy Pancakes. Check console for Array Log.";
      q17_divCreated = updateResult(result, q17_ClassName, q17_ID, q17_divCreated);
    } else {
      //if input is not an integer
      q17_divCreated = triggerError(
        "Error: Input is not an integer",
        q17_ClassName,
        q17_ID,
        q17_divCreated
      );
    }
  }