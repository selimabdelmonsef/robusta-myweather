import React from 'react';
import { _GetWeatherData } from '../../../redux-action/weatherData-action';
import styles from './temp-summary-page.module.css'
import { connect } from "react-redux"; 
import classnames from 'classnames';

class TempSummaryPage extends React.Component {


    componentDidMount() {
        console.log(this.props.data)
    }
    getWeekDayName() {

        var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        var dateObj = new Date()
        var weekdayNumber = dateObj.getDay()
        var weekdayName = arrayOfWeekdays[weekdayNumber]
        return weekdayName;
    }
    getDay() {
        var today = new Date();
        var todayNumber = today.getDay();
        return todayNumber;

    }
    getFullYear() {
        var today = new Date();
        var fullYear = today.getFullYear();
        return fullYear;
    }
    render() {
        return (

            <div >
                <div>
                  
                         <div><div classname={styles.summaryTemp}>

                            <h1 className={styles.tempContainer}>{this.props.data.apparentTemperature.toFixed()}&#176;</h1>
                            <span className={styles.highlowTempContainer}>{this.props.data.highTemp.toFixed()}&#176;/{this.props.data.lowTemp.toFixed()}&#176;</span>
                            <h1 className={styles.summary}>{this.props.data.summary}</h1>
                        </div>
                            <div className={styles.summaryBase}>

                                {this.getWeekDayName()}  {this.getDay()}, {this.getFullYear()}
                                <h1 className={styles.summary2}>{this.props.data.summary}</h1>
                            </div>
                        </div>

                    


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
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(TempSummaryPage); 