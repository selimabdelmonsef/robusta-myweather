var longitude2 = null;
export const getLongitude = () => {

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            longitude2 = position.coords.longitude;
        })
    }
    return  longitude2;
}