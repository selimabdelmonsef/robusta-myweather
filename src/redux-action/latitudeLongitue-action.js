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
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude); 
        });
      }
}