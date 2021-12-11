import { readFileSync } from "fs";

const getInput = () => {
  return readFileSync(process.cwd() + "/day2/input.txt")
    .toString()
    .trim()
    .split("\n");
};

const runA = async (input) => {
  let depth = 0;
  let horizontal = 0;

  for (let i = 0; i < input.length; i++) {
    const [direction, x] = input[i].split(" ");
    const num = parseInt(x);

    if (direction === "down") {
      depth += num;
    } else if (direction === "up") {
      depth -= num;
    } else if (direction === "forward") {
      horizontal += num;
    }
  }

  return depth * horizontal;
};

const runB = async (input) => {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    const [direction, x] = input[i].split(" ");
    const num = parseInt(x);

    if (direction === "down") {
      aim += num;
    } else if (direction === "up") {
      aim -= num;
    } else if (direction === "forward") {
      horizontal += num;
      depth += aim * num;
    }
  }

  return depth * horizontal;
};

const input = getInput();

runA(input).then(console.log);
runB(input).then(console.log);
