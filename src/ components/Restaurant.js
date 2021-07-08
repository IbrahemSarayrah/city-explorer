import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export class Restaurant extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Rating</th>
                        <td>Image</td>
                        <th>Price</th>
                        <th>Restaurant URL</th>
                    </tr>
                </thead>
                {this.props.restaurantsData.map((data, index) => {
                    return <tbody key={index}>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.rating}</td>
                            <td>{<img
                                style={{height:'150px' , width:'100px'}}
                                src= {data.image_url}
                                alt={data.name}
                            />}</td>
                            <td>{data.price}</td>
                            <td>{<a href={data.url}>Restaurant URL</a>}</td>
                        </tr>
                    </tbody>
                })}
            </Table>
        )
    }
}

export default Restaurant
