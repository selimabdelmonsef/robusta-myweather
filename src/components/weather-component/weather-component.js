import React from 'react'
import TempSummaryPage from '../../pages/weather-page/temp-summary-page/temp-summary-page'
import TwentyFourSeven from '../../pages/weather-page/TwentyFourSevenTemp/TwentyFourSevenTemp';
import backgroundImage from '../../images/backgroundImage.png'
import styles from './weather-component.module.css'

export default class weatherComponent extends React.Component {
    render() {
        return (
            <div>
                <div><img className={styles.backgroundBase} src={backgroundImage} alt="" /></div>

                <div className={styles.componentStyles}>
                    <TempSummaryPage />
                    <TwentyFourSeven/> 
                    </div>
            </div>
        )
    }
}