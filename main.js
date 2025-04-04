import lodash from 'lodash';
import chalk from 'chalk';
import colors from 'colors';
import faker from 'faker';


const array = [1, 2, 2, 2, 3, 4, 4, 4, 5];

lodash.uniq(array);

const uniqueNums = lodash.uniq(array);

console.log(uniqueNums); 

console.log(chalk.blue('Hello, world!'));
console.log(chalk.red('This is a red message!'));

