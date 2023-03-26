#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log_service.js'
import { seveKeyValue } from './services/storage.servise.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        seveKeyValue('sity', args.s)
    }
    if (args.t) {
        seveKeyValue('token', args.t)
    }
    //return wether
}

initCLI()