import lodash from 'lodash';
import chalk from 'chalk';
import colors from 'colors';


const array = [1, 2, 2, 2, 3, 4, 5];

lodash.uniq(array);

const uniqueNums = lodash.uniq(array);
console.log(array);
console.log(uniqueNums); 

console.log(chalk.blue('Hello, world!'));
console.log(chalk.yellow('This is not a red message!'));