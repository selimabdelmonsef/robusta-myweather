import React from 'react';
import { _GetWeatherData } from '../../../redux-action/weatherData-action';
import styles from './temp-summary-page.module.css';
import { connect } from "react-redux";
import celcius from '../../../utils/fahrenheit-to-celcius';
import { _GetFahrenheit, _GetCelcius } from '../../../redux-action/fahrenheit-celcius-action';

class TempSummaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            celciusBtn: false,
            fahrenheitBtn:true
        }
       
    }

    componentDidMount() {
        this.props.GetFahrenheit();
        setTimeout(()=>{
            console.log(this.props?.fahrenheit)
            console.log(this.props)

        },5000)
        // console.log(this.props?.fahrenheit)
        // console.log(this.props)
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
    getFahrenheit(){
        this.props.GetFahrenheit();
        this.setState({
            fahrenheitBtn:true,
            celciusBtn:false
        })
    }
    getCelcius(){
        this.props.GetCelcius();
        this.setState({
            fahrenheitBtn:false,
            celciusBtn:true
        })
    }
    render() {
        return (




            <div>
                
                <button className={styles.fahCelciusBtn} onClick={() => this.getFahrenheit()} disabled={this.state.fahrenheitBtn}>F</button>
                <button className={styles.fahCelciusBtn} onClick={() => this.getCelcius()} disabled={this.state.celciusBtn}>C</button>
               
                {this.props?.fahrenheit ?

                    <div>
                        <div classname={styles.summaryTemp}>

                            <h1 className={styles.tempContainer}>{this.props?.data?.apparentTemperature.toFixed()}&#176;</h1>
                            <span className={styles.highlowTempContainer}>{this.props?.data?.highTemp.toFixed()}&#176;/{this.props.data?.lowTemp?.toFixed()}&#176;</span>
                            <h1 className={styles.summary}>{this.props?.data?.summary}</h1>
                        </div>
                        <div className={styles.summaryBase}>

                            {this.getWeekDayName()}  {this.getDay()}, {this.getFullYear()}
                            <h1 className={styles.summary2}>{this.props?.data?.summary}</h1>
                        </div>
                    </div>
                    :
                    <div>
                        <div classname={styles.summaryTemp}>

                            <h1 className={styles.tempContainer}>{celcius(this.props?.data?.apparentTemperature).toFixed()}&#176;</h1>
                            <span className={styles.highlowTempContainer}>{celcius(this.props?.data?.highTemp).toFixed()}&#176;/{celcius(this.props.data?.lowTemp).toFixed()}&#176;</span>
                            <h1 className={styles.summary}>{this.props?.data?.summary}</h1>
                        </div>
                        <div className={styles.summaryBase}>

                            {this.getWeekDayName()}  {this.getDay()}, {this.getFullYear()}
                            <h1 className={styles.summary2}>{this.props?.data?.summary}</h1>
                        </div>
                    </div>
                }





            </div>







        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.WeatherDataReducer.data,
        fahrenheit: state.FahrenHeitCelciusReducer.fahrenheit  
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetWeatherData: (data, onSucess) => {
            dispatch(_GetWeatherData(data, onSucess));
        },
        GetFahrenheit: (data, onSucess) => {
            dispatch(_GetFahrenheit(data, onSucess));
        },
        GetCelcius: (data, onSucess) => {
            dispatch(_GetCelcius(data, onSucess));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(TempSummaryPage); 