import React, { Component } from 'react'
import Restaurant from './Restaurant'

export class Restaurants extends Component {
    render() {
        return (
            <>
                <Restaurant restaurantsData={this.props.restaurantsData} />
            </>
        )
    }
}

export default Restaurants

