import chalk from "chalk";

const info = (...args) => {
  console.log(chalk.green(...args));
};

const warn = (...args) => {
  console.log(chalk.yellow(...args));
};

const error = (...args) => {
  console.log(chalk.red(...args));
};

export const logger = { info, warn, error };
