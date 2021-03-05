import React from 'react'
import { _GetWeatherData } from '../../../redux-action/weatherData-action';
import { connect } from "react-redux"; 

class TwentyFourSeven extends React.Component{

render(){
    return(
        <div>TwentyFOURSEVEN</div>
    )
}

    
}

const mapStateToProps = (state) => {
    return { 
        data: state.WeatherDataReducer.data
    }; 
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetWeatherData: (data, onSucess) => {
            dispatch(_GetWeatherData(data, onSucess));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(TwentyFourSeven); 