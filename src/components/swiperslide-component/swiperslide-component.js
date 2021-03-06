import React from 'react'
import { _GetWeatherData } from '../../redux-action/weatherData-action';
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import celcius from '../../utils/fahrenheit-to-celcius';
import { _GetFahrenheit, _GetCelcius } from '../../redux-action/fahrenheit-celcius-action';
import sunny from '../../images/sunny.png'
import styles from './swiperslide-component.module.css'

class SwiperSliderComponent extends React.Component {

    render() {
        return (
            <div>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={6}
                >
                    {this.props.data?.twentyFourSeventTemp.map((element,index) => {
                        if(index<=24) return <SwiperSlide >
                            <div>
                            {this.props.data?.hourlyTimeStampArr[index]}:00
                            </div>
                            <img className={styles.sunnyLogo} src={sunny} alt="" />
                            {this.props.fahrenheit ? 
                            <div>
                                
                                {element}&#176;
                                </div> 
                                
                            : <div>{celcius(element).toFixed()}&#176;</div>}
                        </SwiperSlide>
                    })}
                </Swiper>

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

export default connect(mapStateToProps, mapDisaptchToProps)(SwiperSliderComponent);  