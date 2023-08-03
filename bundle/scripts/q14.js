let q14_divCreated = false;
let q14_input1 = undefined;
let q14_input2 = undefined;
let q14_ClassName = "q14-result";
let q14_ID = "averageCalculator-q14";


function q14Main() {
    let q14_input1 = document.getElementById("q14input1").value;
    let q14_input2 = document.getElementById("q14input2").value;
    if (Number.isInteger(parseInt(q14_input1)) && Number.isInteger(parseInt(q14_input2))) {
        let average = currencyConverter(parseInt(q14_input1), parseInt(q14_input2));
        let result = "Converted amount is " + average;
        q14_divCreated = updateResult(result, q14_ClassName, q14_ID, q14_divCreated);
    } else {
        // input is not an integer, show error message
        q14_divCreated = triggerError(
            "Error: input is not an integer",
            q14_ClassName,
            q14_ID,
            q14_divCreated
        );
    }
}


function currencyConverter (amount,product) {
    let result = amount * product;
    return result;
}