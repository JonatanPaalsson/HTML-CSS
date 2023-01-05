const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");

const resultText = document.getElementById("resultText");

type Choice = "rock" | "paper" | "scissor";
type Win = -1 | 0 | 1;

type Rules = { beats: Choice; loses: Choice };

type OutComes = Record<Choice, Rules>;
type ChoiceEmoji = Record<Choice, string>;

let yourWins = 0;
let opponentWins = 0;

const randomChoice = () => {
  const choices: Choice[] = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const showOpponentsChoice = (choice: Choice) => {
  const choiceText = document.getElementById("choiceText");
  if (!choiceText) return choice;

  const choiceEmoji: ChoiceEmoji = { paper: "📜", rock: "🪨", scissor: "✂️" };

  choiceText.textContent = choiceEmoji[choice];
  return choice;
};

const calculateResult = (yourChoise: Choice, opponentChoise: Choice): Win => {
  const outComes: OutComes = {
    rock: { beats: "scissor", loses: "paper" },
    paper: { beats: "rock", loses: "scissor" },
    scissor: { beats: "paper", loses: "rock" },
  };

  if (yourChoise === opponentChoise) {
    return 0;
  } else if (outComes[yourChoise].beats === opponentChoise) {
    return 1;
  }

  return -1;
};

const handleResult = (win: Win) => {
  const resultText = document.getElementById("resultText");
  const yourWinsText = document.getElementById("yourWinsText");
  const opponentWinsText = document.getElementById("opponentWinsText");

  const resultDiv = document.getElementById("resultDiv");
  if (!(resultText && yourWinsText && opponentWinsText && resultDiv)) return;

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

const rockBtnPress = () => {
  const computerChoice = randomChoice();
  showOpponentsChoice(computerChoice);

  const result = calculateResult("rock", computerChoice);
  handleResult(result);
};

const paperBtnPress = () => {
  const computerChoice = randomChoice();
  showOpponentsChoice(computerChoice);

  const result = calculateResult("paper", computerChoice);
  handleResult(result);
};

const scissorBtnPress = () => {
  handleResult(calculateResult("scissor", showOpponentsChoice(randomChoice())));
};

rockButton?.addEventListener("click", rockBtnPress);
paperButton?.addEventListener("click", paperBtnPress);
scissorButton?.addEventListener("click", scissorBtnPress);
