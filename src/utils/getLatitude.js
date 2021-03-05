var latitude2 = null;
export const getLatitude = () => {

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            latitude2 = position.coords.latitude;
        })
    }
    return  latitude2;
}