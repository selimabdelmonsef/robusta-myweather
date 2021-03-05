import { combineReducers } from 'redux';
import LatitudeLongitudeReducer from './latitudeLongitue-reducer';
import WeatherDataReducer from './weatherData-reducer'

const rootReducer = combineReducers({
    LatitudeLongitudeReducer,
    WeatherDataReducer
});

export const MainReducerActionType = {
    Clear: "ClearMainReducer"
}

export default function MainReducers(state, action) {
    switch (action.type) {
        case MainReducerActionType.Clear:
            state = undefined;
            break;
        default: return rootReducer(state, action);
    }
}