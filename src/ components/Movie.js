import React, { Component } from 'react'
import { Table } from 'react-bootstrap'


export class Movie extends Component {

    render() {
        return (

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Overview</th>
                        <td>Image</td>
                        <th>Average Vote</th>
                        <th>Vote Count</th>
                        <th>Release_Date</th>
                    </tr>
                </thead>
                {this.props.movieData.map(data => {
                    return <tbody>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.overview}</td>
                            <td>{<img
                                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                alt={data.title}
                            />}</td>
                            <td>{data.vote_average}</td>
                            <td>{data.vote_count}</td>
                            <td>{data.release_date}</td>
                        </tr>
                    </tbody>
                })}
            </Table>

        )
    }
}

export default Movie
