let q12_divCreated = false;
let q12_input1 = undefined;
let q12_input2 = undefined;
let q12_ClassName = "q12-result";
let q12_ID = "football-q12";


function q12Main() {
    let q12_team1_input = document.getElementById("q12input1").value;
    let q12_team2_input = document.getElementById("q12input2").value;
    if (Number.isInteger(parseInt(q12_team1_input)) && Number.isInteger(parseInt(q12_team2_input))) {
        let winner = decideWinnerQ12(q12_team1_input, q12_team2_input);
        let result = "Winner is " + winner;
        q12_divCreated = updateResult(result, q12_ClassName, q12_ID, q12_divCreated);
    } else {
        // input is not an integer, show error message
        q12_divCreated = triggerError(
            "Error: input is not an integer",
            q12_ClassName,
            q12_ID,
            q12_divCreated
        );
    }
}


function decideWinnerQ12 (team2, team1) {
    if (team2> team1) {
        return "Team 2"
    }else {
        return "Team 1"
    }
}