import https from 'https'
import axios from 'axios'
import { getKEyValue, TOKEN } from './storage.servise.js'
import { printError } from './log.service.js'

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`

const getWeather = async (city) => {
    const token = await getKEyValue(TOKEN)
    if (!token) {
        printError('Token is not defined')
        return
    }
    const { data } = await axios.get(BASE_URL, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })
    return data
}

export { getWeather }