var rockButton = document.getElementById("rockBtn");
var paperButton = document.getElementById("paperBtn");
var scissorButton = document.getElementById("scissorBtn");
var resultText = document.getElementById("resultText");
var yourWins = 0;
var opponentWins = 0;
var randomChoice = function () {
    var choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
};
var showOpponentsChoice = function (choice) {
    var choiceText = document.getElementById("choiceText");
    if (!choiceText)
        return choice;
    var choiceEmoji = { paper: "📜", rock: "🪨", scissor: "✂️" };
    choiceText.textContent = choiceEmoji[choice];
    return choice;
};
var calculateResult = function (yourChoise, opponentChoise) {
    var outComes = {
        rock: { beats: "scissor", loses: "paper" },
        paper: { beats: "rock", loses: "scissor" },
        scissor: { beats: "paper", loses: "rock" }
    };
    if (yourChoise === opponentChoise) {
        return 0;
    }
    else if (outComes[yourChoise].beats === opponentChoise) {
        return 1;
    }
    return -1;
};
var handleResult = function (win) {
    var resultText = document.getElementById("resultText");
    var yourWinsText = document.getElementById("yourWinsText");
    var opponentWinsText = document.getElementById("opponentWinsText");
    var resultDiv = document.getElementById("resultDiv");
    if (!(resultText && yourWinsText && opponentWinsText && resultDiv))
        return;
    resultDiv.setAttribute("class", "choiceDivVisible");
    switch (win) {
        case 1:
            yourWins++;
            resultText.textContent = "You win!";
            yourWinsText.textContent = yourWins.toString();
            break;
        case 0:
            resultText.textContent = "Tie!";
            break;
        case -1:
            opponentWins++;
            resultText.textContent = "You lose!";
            opponentWinsText.textContent = opponentWins.toString();
            break;
    }
};
var rockBtnPress = function () {
    var computerChoice = randomChoice();
    showOpponentsChoice(computerChoice);
    var result = calculateResult("rock", computerChoice);
    handleResult(result);
};
var paperBtnPress = function () {
    var computerChoice = randomChoice();
    showOpponentsChoice(computerChoice);
    var result = calculateResult("paper", computerChoice);
    handleResult(result);
};
var scissorBtnPress = function () {
    handleResult(calculateResult("scissor", showOpponentsChoice(randomChoice())));
};
rockButton === null || rockButton === void 0 ? void 0 : rockButton.addEventListener("click", rockBtnPress);
paperButton === null || paperButton === void 0 ? void 0 : paperButton.addEventListener("click", paperBtnPress);
scissorButton === null || scissorButton === void 0 ? void 0 : scissorButton.addEventListener("click", scissorBtnPress);
