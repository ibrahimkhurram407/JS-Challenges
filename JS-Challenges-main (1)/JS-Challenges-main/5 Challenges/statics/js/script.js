//Challenge 1: Age in Days
function Challenge1 () {
    let age = prompt ("When you were born?")
    let AgeInDays = (2021-age)*365;
    let h1 = document.createElement("h1")
    let TextAnswer = document.createTextNode('You Are ' + AgeInDays + ' Days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(TextAnswer);
    document.getElementById('Challenge-1-Results').appendChild(h1);
}

function Challenge1Result () {
    document.getElementById("ageInDays").remove();
}

//Challenge 2: Cat Generator
function Challenge2 () {
    let img = document.createElement('img');
    let div = document.getElementById("Challenge-2")
    img.src = "statics/images/cat.png"
    img.style = 'width:30%'
    div.appendChild(img);
}

//Challenge 3: Roack, Paper and Scissor
function RPSGame (yourChoice) {
    var HumanChoice, BotChoice;
    HumanChoice = yourChoice.id;
    BotChoice = BotChoiceGenerator();
    results = decideWinner(HumanChoice, BotChoice);
    message = FinalMessage(results);
    RPSFrontEnd(HumanChoice, BotChoice, message);
}

function BotChoiceGenerator () {
    let ComputerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
    return (ComputerChoice);
}

function decideWinner (HumanChoice, ComputerChoice) {
    let RPSDataBase = {
        'Rock':{'Rock':0.5, 'Paper':1, 'Scissors':0},
        'Paper':{'Rock':0, 'Paper':0.5, 'Scissors':1},
        'Scissors':{'Rock':1, 'Paper':0, 'Scissors':0.5}
    }
    let ComputerScore = RPSDataBase[HumanChoice][ComputerChoice];
    let HumanScore = RPSDataBase[ComputerChoice][HumanChoice];
    return [HumanScore, ComputerScore];
}

function FinalMessage (Scores) {
    HumanScore = Scores[0];
    BotScore = Scores[1];
    if (HumanScore === 1) {
        return {'message':'You Won!', 'color':'green'}
    }else if (HumanScore === 0.5) {
        return {'message':'Match Tied!', 'color':'yellow'}
    }else {
        return {'message':'You lost!', 'color':'red'}
    }
}

function RPSFrontEnd (HumanChoice, BotChoice, message) {
    var ImagesDataBase = {
        'Rock': 'statics/images/rock.PNG',
        'Paper': 'statics/images/paper.PNG',
        'Scissors': 'statics/images/scissors.PNG'
    }
    
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissors').remove();

    var HumanDiv = document.createElement('div');
    var BotDiv = document.createElement('div');
    var MessageDiv = document.createElement('div');

    HumanDiv.innerHTML = "<img src='" + ImagesDataBase[HumanChoice] + "' style='box-shadow: 6px 6px 15px blue;'>"
    BotDiv.innerHTML = "<img src='" + ImagesDataBase[BotChoice] + "' style='box-shadow: 6px 6px 15px red;'>"
    MessageDiv.innerHTML = "<h1 style='color:" + message['color'] + "'>" + message['message'] + "</h1>"


    document.getElementById('Challenge-3').appendChild(HumanDiv);
    document.getElementById('Challenge-3').appendChild(MessageDiv);
    document.getElementById('Challenge-3').appendChild(BotDiv);
}


//Challenge 4" Change color of all Buttons
function ButtonColor (Choice) {
    let color = Choice.value
    BackUp();
    Choser(color);
}

var All_Buttons = document.getElementsByTagName('button');
var Copyof_All_Buttons = [];

function BackUp () {
    for (i=0; i<All_Buttons.length; i++) {
        Copyof_All_Buttons.push(All_Buttons[i].classList[1]);
    }
}

function Choser (color) {
    if (color == 'Red') {
        console.log ("worked1");
        ColorRed();
    }else if (color == 'Green') {
        ColorGreen ();
    }if (color == 'Random') {
        ColorRandom();
    }else if (color == 'Default') {
        ColorDefault();
    }
}

function ColorRed () {
    for (i=0; i<All_Buttons.length; i++) {
        All_Buttons[i].classList.remove(All_Buttons[i].classList[1]);
        All_Buttons[i].classList.add('btn-danger');
    }
}

function ColorGreen () {
    for (i=0; i<All_Buttons.length; i++) {
        All_Buttons[i].classList.remove(All_Buttons[i].classList[1]);
        All_Buttons[i].classList.add('btn-success');
    }
}

function ColorRandom () {
    let Colors = ['btn-primary','btn-secondary','btn-success','btn-danger',
    'btn-warning','btn-info'];

    for (i=0; i<All_Buttons.length; i++) {
        let RandomNum = (Math.floor((Math.random())*6));
        All_Buttons[i].classList.remove(All_Buttons[i].classList[1]);
        All_Buttons[i].classList.add(Colors[RandomNum]);
    }
}

function ColorDefault () {
    for (i=0; i<All_Buttons.length; i++) {
        All_Buttons[i].classList.remove(All_Buttons[i].classList[1]);
        All_Buttons[i].classList.add(Copyof_All_Buttons[i]);
    }
}

//Challenge:5 Black Jack Game
document.querySelector('#Hit').addEventListener('click', BlackJackHit);
document.querySelector('#Deal').addEventListener('click', BlackJackDeal);
document.querySelector('#Stand').addEventListener('click', DealerLogic);

let BlackJackGameDataBase = {
    'you':{'ScoreSpan':'#Your-Score', 'div':'#Your-Box', 'score':0},
    'dealer':{'ScoreSpan':'#Dealer-Score', 'div':'#Dealer-Box', 'score':0},
    'cards':['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsValue':{'2':2, '3': 3, '4': 3, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K':13, 'A':[1, 14]}
}

const YOU = (BlackJackGameDataBase['you']);
const DEALER = (BlackJackGameDataBase['dealer']);
const Aww = new Audio ("statics/audio/aww.mp3");
const Cash = new Audio ("statics/audio/cash.mp3");
const swish = new Audio ("statics/audio/swish.m4a")

function BlackJackHit () {
    var card = RandomCard();
    cardShow(card, YOU);
    ScoreUpdate(card, YOU, BlackJackGameDataBase);
    ScoreShow(card, YOU);
}

function RandomCard () {
    var RandomIndex= Math.floor(Math.random()*13);
    return(BlackJackGameDataBase['cards'][RandomIndex]);
}

function cardShow (card, activePlayer) {
    if (activePlayer['score'] < 21) {
        var image = document.createElement('img');
        image.src = `statics/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(image);
        swish.play();
    }
}



function ScoreUpdate (card, activePlayer, BlackJackGameDataBase) {
    if (card === 'A') {
        if (activePlayer['score'] + BlackJackGameDataBase['cardsValue'][card][1] <=21) {
            activePlayer['score'] += BlackJackGameDataBase['cardsValue'][card][1];
        }else {
            activePlayer['score'] += BlackJackGameDataBase['cardsValue'][card][0];
        }
    }else {
        activePlayer['score'] += BlackJackGameDataBase['cardsValue'][card];
    }
    
}

function ScoreShow (card, activePlayer) {
    
    if (activePlayer['score'] < 21) {
        document.querySelector(activePlayer['ScoreSpan']).textContent = activePlayer['score'];
    } else {
        document.querySelector(activePlayer['ScoreSpan']).textContent = 'Bust!';
        document.querySelector(activePlayer['ScoreSpan']).style.color = 'Red';
    }
}


function BlackJackDeal () {
    var targetYou = document.querySelector(YOU['div']).querySelectorAll('img');
    var targetDealer = document.querySelector(DEALER['div']).querySelectorAll('img');
    
    for (let i=0; i<targetYou.length; i++) {
        targetYou[i].remove();
    }
    for (let i=0; i<targetDealer.length; i++) {
        targetDealer[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector("#Your-Score").textContent = 0;
    document.querySelector("#Dealer-Score").textContent = 0;

    document.querySelector("#Your-Score").style.color = "#ffff";
    document.querySelector("#Dealer-Score").style.color = "#ffff";
    
    console.log(document.querySelector("#Your-Score").style.color);
}

function DealerLogic () {
    var card = RandomCard();
    cardShow(card, DEALER);
    ScoreUpdate(card, DEALER, BlackJackGameDataBase);
    ScoreShow(card, DEALER);
}