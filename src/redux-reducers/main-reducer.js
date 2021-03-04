import { combineReducers } from 'redux';
import LatitudeLongitudeReducer from './latitudeLongitue-reducer';

const rootReducer = combineReducers({


    LatitudeLongitudeReducer
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