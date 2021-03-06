import React from 'react'
import { _GetWeatherData } from '../../../redux-action/weatherData-action';
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TwentyFourSevenTemp.module.css';
import 'swiper/swiper-bundle.css';
import SwiperSliderComponent from '../../../components/swiperslide-component/swiperslide-component'

class TwentyFourSeven extends React.Component {


    render() {
        return (
<div >
    <SwiperSliderComponent></SwiperSliderComponent>
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

export default connect(mapStateToProps, mapDisaptchToProps)(TwentyFourSeven);  