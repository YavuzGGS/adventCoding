import data from "./input.json";
import sequence from "./sequence.json";

const inputData = data;

export function Main(data: string[]) {
  let initialVal = 50;
  let counter = 0;
  let clickCounter = 0;
  for (let row of data) {
    //console.log(row)
    const direction = row[0];
    let number = Number(row.slice(1));
    if (number >= 100) {
      clickCounter += Math.floor((number + initialVal) / 100);
    }
    number = number % 100;
    if (direction == "R") {
      initialVal = initialVal + number;
      if (initialVal >= 100) {
        clickCounter++;
      }
      initialVal = initialVal % 100;
    }
    if (direction == "L") {
      initialVal = initialVal - number;
      if (initialVal <= 0) {
        clickCounter++;
        initialVal += 100;
      }
      initialVal = initialVal % 100;
    }
    if (initialVal == 0) {
      counter++;
    }
  }
  console.log(clickCounter);
  return clickCounter;
}

Main(inputData);

// helpers
const mod100 = (n: number) => ((n % 100) + 100) % 100;

export const countEncounteredZero = (
  startPosition: number,
  steps: number,
  direction: "R" | "L"
): number => {
  let stepsToFirstZero: number | null = null;

  if (direction === "R") {
    //get amount of ticks needed to hit 100
    stepsToFirstZero = (100 - startPosition) % 100;
  }
  if (direction === "L") {
    //get amount of ticks needed to hit 0
    stepsToFirstZero = startPosition % 100;
  }

  if (stepsToFirstZero === null)
    throw new Error("Something went wrong here bud");

  //if we at 0 then we don't count the current 0
  if (stepsToFirstZero === 0) return Math.floor(steps / 100);

  //never reached the 0 then return 0
  if (steps < stepsToFirstZero) return 0;

  // count all the 0's
  return Math.floor((steps - stepsToFirstZero) / 100) + 1;
};

//putting it together luv
export const countClicks = (input: string[]) => {
  let initPosition = 50;
  let clicks = 0;

  for (const row of input) {
    const direction = row[0];
    const number = Number(row.slice(1));

    if (direction === "R") {
      clicks += countEncounteredZero(initPosition, number, "R");
      initPosition = mod100(initPosition + number);
    }
    if (direction === "L") {
      clicks += countEncounteredZero(initPosition, number, "L");
      initPosition = mod100(initPosition - number);
    }
  }

  return clicks;
};
console.log(countClicks(sequence));
