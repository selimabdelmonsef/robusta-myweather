const initState = [{ latitude: "", longitude: "" }];

export default function LatitudeLongitudeReducer(state = initState, action) {

    switch (action.type) {
        case 'GET_LATITUDE':
            return {
                ...state,
                latitude: action.data
            };
        case "GET_LONGITUDE":
            return {
                ...state,
                longitude: action.data
            };
        default: return state;
    }
}