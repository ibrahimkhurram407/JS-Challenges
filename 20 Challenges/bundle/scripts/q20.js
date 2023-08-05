let q20_Array = [232,435,435,645,4543,4535,435]
let q20_divCreated = false;
let q20_input = undefined;
let q20_ClassName = "q20-result";
let q20_ID = "increasePriceOfTheArray";

function q20Main() {
    q20_input = document.getElementById("q20input").value;
    if (Number.isInteger(parseInt(q20_input))) {
      IncreasePrice(parseInt(q20_input, q20_Array));
      result = "Added " + q20_input + " to all the products.";
      q20_divCreated = updateResult(result, q20_ClassName, q20_ID, q20_divCreated);
    } else {
      //if input is not an integer
      q20_divCreated = triggerError(
        "Error: Input is not an integer",
        q20_ClassName,
        q20_ID,
        q20_divCreated
      );
    }
  }

function IncreasePrice (amount, productsArray) {
    for (var i=0; i<productsArray.length; i++) {
        productsArray[i] += amount;
    }
}