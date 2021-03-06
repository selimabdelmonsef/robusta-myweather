import { useState } from "react";
import { useStore } from "react-redux";


export const _GetFahrenheit = () => (dispatch, data) => {

    dispatch({
        type: "GET_FAHRENHEIT",
        data: true
    });
    dispatch({
        type: "GET_CELCIUS",
        data: false
    });
}
export const _GetCelcius = () => (dispatch, data) => {

    dispatch({
        type: "GET_CELCIUS",
        data: true
    });
    dispatch({
        type: "GET_FAHRENHEIT",
        data: false
    });
 
}