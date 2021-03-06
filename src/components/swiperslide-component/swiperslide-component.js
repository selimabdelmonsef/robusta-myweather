import React from 'react'
import { _GetWeatherData } from '../../redux-action/weatherData-action';
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';

class SwiperSliderComponent extends React.Component {
 
    render() {    
        return (
            <Swiper
            spaceBetween={5}
            slidesPerView={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >
                
              {this.props.data.twentyFourSeventTemp.map((element) => {
               return <SwiperSlide >{element}</SwiperSlide>
                })}
</Swiper> 
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

export default connect(mapStateToProps, mapDisaptchToProps)(SwiperSliderComponent);  