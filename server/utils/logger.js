import chalk from 'chalk';

export const logInfo = (...args) => console.log(chalk.blue('[log]'), ...args);
export const logWarn = (...args) =>
  console.warn(chalk.yellow('[WARN]'), ...args);
export const logError = (...args) => console.error(chalk.red('[ERR]'), ...args);
