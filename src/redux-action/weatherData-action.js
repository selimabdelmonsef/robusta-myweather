import { api } from '../constants/api-constants';
import { getLongitude } from '../utils/getLongitude';
import { getLatitude } from '../utils/getLatitude';
import Axios from 'axios';
import hourlyTimeStamp from '../utils/hourlyTimeStamp';

let datas = [];
let apparentTemperatureHigh = null;
let apparentTemperatureLow = null;
let twentyFourSeventTemp = [];
let hourlyTimeStampArr = [];
export const _GetWeatherData = () => (dispatch, data) => {
    getLatitude();
    getLongitude();

    setTimeout(() => {
        let response = Axios.get(api.weather_api.replace("{{latitude}}", getLatitude()).replace("{{longitude}}", getLongitude())).then(response => {

            console.log(response);
            response.data.hourly.data.forEach((element) => {
                element.apparentTemperature.toString();
                twentyFourSeventTemp = [...twentyFourSeventTemp, parseInt(element.apparentTemperature).toFixed()]
                hourlyTimeStampArr = [...hourlyTimeStampArr, hourlyTimeStamp(element.time)]
            })
console.log(hourlyTimeStampArr);
            response.data.daily.data.forEach((element) => (
                apparentTemperatureHigh = element.apparentTemperatureHigh,
                apparentTemperatureLow = element.apparentTemperatureLow
            ))
            datas =
            {
                apparentTemperature: response.data.currently.apparentTemperature,
                summary: response.data.currently.summary,
                highTemp: apparentTemperatureHigh,
                lowTemp: apparentTemperatureLow,
                twentyFourSeventTemp: twentyFourSeventTemp,
                hourlyTimeStampArr: hourlyTimeStampArr

            }
            // console.log("TWENTYYY",twentyFourSeventTemp);
            console.log("DATAAS", datas)
            dispatch({
                type: "GET_WEATHER_DATA",
                data: datas
            });
        })
        

    }, 2000);
    
}



