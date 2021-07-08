import React, { Component } from 'react'
import WeatherDay from './WeatherDay'


export class Weather extends Component {

    render() {
        return (
            <>
                <WeatherDay weatherData={this.props.weatherData} />

            </>
        )
    }
}

export default Weather
