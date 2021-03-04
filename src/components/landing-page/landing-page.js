import React from 'react';
import styles from './landing-page.module.css'
import robustaLogo from '../../images/robustaLogo.png'
import { connect } from "react-redux";
import {_GetLatitudeLongitude} from '../../redux-action/latitudeLongitue-action'

 class landingPage extends React.Component {

    componentDidMount(){
     this.props.LatitudeLongitude();
    }
    render() {
        return (
            <div className={styles.pageBase}>
               
                <img className={styles.robustaLogo} src={robustaLogo} alt="" />
              
                <div className={styles.pageText}>
                    <h1>Press the button below to check your current weather</h1>
                    <button onClick= {()=>this.props.history.push("/starredgithubpage")} className={styles.checkWeatherBtn}> Check Weather</button>
                </div>
                
             
             
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        latitude: state.LatitudeLongitudeReducer.latitude,
        longitude: state.LatitudeLongitudeReducer.longitude,
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        LatitudeLongitude: (data, onSucess) => {
            dispatch(_GetLatitudeLongitude(data, onSucess));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(landingPage); 