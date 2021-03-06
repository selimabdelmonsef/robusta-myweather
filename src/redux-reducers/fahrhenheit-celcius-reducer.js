const initState = [{ fahrenheit: "", celcius: "" }];

export default function FahrenHeitCelciusReducer(state = initState, action) {

    switch (action.type) {
        case 'GET_FAHRENHEIT':
            return {
                ...state,
                fahrenheit: action.data
            }; 
        case "GET_CELCIUS":
            return {
                ...state,
                celcius: action.data
            };
        default: return state;
    }
}