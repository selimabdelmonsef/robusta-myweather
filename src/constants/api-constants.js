import {timestamp} from '../utils/timestamp'

export const api = {
    weather_api: 'https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/{{latitude}},{{longitude}},'+timestamp
}