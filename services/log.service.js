import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(`${chalk.bgRed('ERROR')}: ${error}`);
}

const printSucsess = (message) => {
    console.log(`${chalk.bgGreen('SUCSESS')}: ${message}`);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}: 
        without params - output wether
        -h - hepl
        -s [CITY] - set city
        -t [API_KEY] - set api key`
    );
}


const printWeather = (weather) => {
    console.log(
        dedent`${chalk.bgGreen('RESOULT:')}
            Country: ${weather.sys.country}
            City: ${weather.name}
            Temp: ${weather.main.temp}
            Fells like: ${weather.main.feels_like}
            ${weather.weather[0].main}`
    );
}

export { printError, printSucsess, printHelp, printWeather }