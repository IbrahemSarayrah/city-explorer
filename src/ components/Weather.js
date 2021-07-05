import React, { Component } from 'react'
import { Table } from 'react-bootstrap'


export class Weather extends Component {

    render() {
        return (

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Weather Description</th>
                            <th>high of</th>
                            <th>low of</th>
                        </tr>
                    </thead>
                    {this.props.weatherData.map(data => {
                        return <tbody>
                            <tr>
                                <td>{data.valid_date}</td>
                                <td>{data.description}</td>
                                <td>{data.high_temp}</td>
                                <td>{data.low_temp}</td>
                            </tr>
                        </tbody>
                    })}
                </Table>
                
        )
    }
}

export default Weather
