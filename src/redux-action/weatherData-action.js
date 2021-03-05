import { api } from '../constants/api-constants'
import { getLongitude } from '../utils/getLongitude'
import { getLatitude } from '../utils/getLatitude'
import Axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react';

let datas = [];
let apparentTemperatureHigh = null;
let apparentTemperatureLow = null;
let responseData = [];
export const _GetWeatherData = () => (dispatch, data) => {
    getLatitude();
    getLongitude();

    setTimeout(() => {
        let response = Axios.get(api.weather_api.replace("{{latitude}}", getLatitude()).replace("{{longitude}}", getLongitude())).then(response => {
            
            console.log(response);
            response.data.daily.data.forEach((element) => (
                apparentTemperatureHigh = element.apparentTemperatureHigh,
                apparentTemperatureLow = element.apparentTemperatureLow
            ))
            datas =
                [{
                    apparentTemperature: response.data.currently.apparentTemperature,
                    summary: response.data.currently.summary,
                    highTemp: apparentTemperatureHigh,
                    lowTemp: apparentTemperatureLow

                }]
            console.log(datas)
            dispatch({
                type: "GET_WEATHER_DATA",
                data: datas
            });
        })
        responseData = response.data
    }, 2000);
}

export const _GetTwentyFourSevenTemp = () => (dispatch, data) => {
console.log(responseData)
}


