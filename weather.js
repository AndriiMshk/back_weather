#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp, printSucsess, printError } from './services/log.service.js'
import { seveKeyValue, TOKEN, CITY, getKEyValue } from './services/storage.servise.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('Where is the token?')
        return
    }
    try {
        await seveKeyValue(TOKEN, token)
        printSucsess('Token saved')
    } catch (err) {
        printError(err.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        seveKeyValue(CITY, args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather('kiev')
}

initCLI()

//e4c4b727621f195c880c628cce157283