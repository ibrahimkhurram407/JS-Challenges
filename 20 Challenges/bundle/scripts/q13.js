let q13_divCreated = false;
let q13_input1 = undefined;
let q13_input2 = undefined;
let q13_ClassName = "q13-result";
let q13_ID = "averageCalculator-q13";


function q13Main() {
    let q13_input1 =  document.getElementById("q13input1").value;
    let q13_input2 = document.getElementById("q13input2").value;
    let q13_input3 = document.getElementById("q13input3").value;
    if (Number.isInteger(parseInt(q13_input1)) && Number.isInteger(parseInt(q13_input2)) && Number.isInteger(parseInt(q13_input3))) {
        let average = calculateAverage(parseInt(q13_input1), parseInt(q13_input2), parseInt(q13_input3));
        let result = "Average is " + average;
        q13_divCreated = updateResult(result, q13_ClassName, q13_ID, q13_divCreated);
    } else {
        // input is not an integer, show error message
        q13_divCreated = triggerError(
            "Error: input is not an integer",
            q13_ClassName,
            q13_ID,
            q13_divCreated
        );
    }
}


function calculateAverage (a1,a2,a3,) {
    let total = a1 + a2 + a3;
    let average  = total / 3;
    let result = Math.round(average);
    return result;
}