let cupIndex = -1;
const NUMBER_OF_CUPS = 3;
const cup1 = document.getElementById("cup1");
const cup2 = document.getElementById("cup2");
const cup3 = document.getElementById("cup3");

const cups = document.querySelectorAll(".cup");
const ELEMENTS = [cup1, cup2, cup3];

const randomizeCup = () => Math.round(Math.random() * (NUMBER_OF_CUPS - 1));

const setUpGame = () => {
  cupIndex = randomizeCup();
};

const showBall = () => {
  const ball = document.createElement("span");
  const parentElement = ELEMENTS[cupIndex];
  parentElement.append(ball);
};

const handleClickBall = (ballIndex) => () => {
  showBall();
  if (cupIndex === ballIndex) alert("You got it");
};

const initializeHandlers = () => {
  cups.forEach((elem, index) => {
    elem.addEventListener("click", handleClickBall(index));
  });
};

const reset = () => window.location.reload();

setUpGame();
initializeHandlers();
