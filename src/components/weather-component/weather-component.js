import React from 'react'
import TempSummaryPage from '../../pages/weather-page/temp-summary-page/temp-summary-page'
import TwentyFourSeven from '../../pages/weather-page/TwentyFourSevenTemp-page/TwentyFourSevenTemp-page';
import backgroundImage from '../../images/backgroundImage.png'
import styles from './weather-component.module.css'
import { _GetWeatherData } from '../../redux-action/weatherData-action';
import { _GetLatitudeLongitude } from '../../redux-action/latitudeLongitue-action'
import { connect } from "react-redux";

class weatherComponent extends React.Component {

componentDidMount(){
    this.props.LatitudeLongitude();
    this.props.GetWeatherData();
}
    render() {
        return (
            <div>
                <div><img className={styles.backgroundBase} src={backgroundImage} alt="" /></div>

                <div className={styles.componentStyles}>
                    <TempSummaryPage />
                    <div className={styles.twentyFourSevenPage}><TwentyFourSeven/> </div>
                    
                    </div>
            </div>
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
        LatitudeLongitude: (data, onSucess) => {
            dispatch(_GetLatitudeLongitude(data, onSucess));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(weatherComponent);  