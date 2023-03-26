#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp, printSucsess, printError } from './services/log_service.js'
import { seveKeyValue } from './services/storage.servise.js'

const saveToken = async (token) => {
    try {
        await seveKeyValue('token', token)
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
        seveKeyValue('sity', args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    //return wether
}

initCLI()