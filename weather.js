#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp, printSucsess, printError } from './services/log.service.js'
import { seveKeyValue, TOKEN, CITY, getKEyValue } from './services/storage.servise.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token is not defined')
        return
    }
    try {
        await seveKeyValue(TOKEN, token)
        printSucsess('Token saved')
    } catch (err) {
        printError(err.message)
    }
}

const getForecast = async () => {
    try {
        const city = await getKEyValue(CITY)
        const weather = await getWeather(city)
        console.log(weather);
    } catch (e) {
        if (e.response?.status === 404) {
            printError('City is not exist')
        } else if (e.response?.status === 401) {
            printError('Tokin is invalid')
        } else {
            printError(e.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return seveKeyValue(CITY, args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getForecast()
}

initCLI()