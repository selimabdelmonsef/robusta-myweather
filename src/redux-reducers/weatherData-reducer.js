const initState = [{TWENTYFOURSEVENTEMP:""}];

export default function WeatherDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_WEATHER_DATA":
      return {
        ...state,
        data: action.data
      };
      case "GET_TWENTYFOURSEVEN_TEMP":
      return {
        ...state,
        TWENTYFOURSEVENTEMP: action.data
      };
    default:
      return state;
  }
}
