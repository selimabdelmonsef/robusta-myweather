import { useState } from "react";
import { useStore } from "react-redux";

export var latitude = null;
export const _GetLatitudeLongitude = () => (dispatch, data) => {

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            dispatch({
                type: "GET_LATITUDE",
                data: position.coords.latitude
            });
            dispatch({
                type: "GET_LONGITUDE",
                data: position.coords.longitude
            });
        });
      }
}