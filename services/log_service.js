import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(`${chalk.bgRed('ERROR:')} ${error}`);
}

const printSucsess = (message) => {
    console.log(`${chalk.bgGreen('SUCSESS:')} ${message}`);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP: ')} 
        without params - output wether
        -h - hepl
        -s [CITY] - set city
        -t [API_KEY] - set api key`
    );
}

export { printError, printSucsess, printHelp }