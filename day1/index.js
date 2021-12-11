import { readFileSync } from "fs";

const getInput = () => {
  return readFileSync(process.cwd() + "/day1/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
};

const runA = async (input) => {
  let increased = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] < input[i]) {
      increased++;
    }
  }

  return increased;
};

const runB = async (input) => {
  let increased = 0;

  for (let i = 0; i < input.length - 3; i++) {
    const totalC = input[i] + input[i + 1] + input[i + 2];
    const totalN = input[i + 1] + input[i + 2] + input[i + 3];

    if (totalC < totalN) {
      increased++;
    }
  }

  return increased;
};

const input = getInput();

runA([...input]).then(console.log);
runB([...input]).then(console.log);
