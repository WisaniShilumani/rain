const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const CARD_TYPES = ["Clubs", "Diamonds", "Hearts", "Spades"];

const x = {
  Clubs: "",
  Diamonds: "",
};

const generateAllPossibilities = () => {
  const possibilities = [];
  CARD_VALUES.forEach((value) => {
    CARD_TYPES.forEach((type) => {
      possibilities.push(`${value}${type}`);
    });
  });

  return possibilities;
};

const pickElementFromArray = (A) => {
  const arrLen = A.length;
  const randomEntryIndex = Math.round(Math.random() * (arrLen - 1));
  const entry = A[randomEntryIndex];
  if (randomEntryIndex >= arrLen) console.log(A.length, randomEntryIndex, A);
  return entry;
};

const getShuffledArray = () => {
  const newArray = [];
  const initialArray = generateAllPossibilities();
  let unshuffledArray = [...initialArray];

  console.log(initialArray.length);

  for (let i = 0; i < initialArray.length; i++) {
    const pickedElement = pickElementFromArray(unshuffledArray);
    unshuffledArray = unshuffledArray.filter(
      (element) => element !== pickedElement
    );
    newArray.push(pickedElement);
  }

  console.log(newArray);
};

getShuffledArray();
