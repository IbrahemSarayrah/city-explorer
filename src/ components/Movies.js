import React, { Component } from 'react'
import Movie from './Movie'


export class Movies extends Component {
    render() {
        return (
            <>
                <Movie movieData={this.props.movieData} />
            </>
        )
    }
}

export default Movies
