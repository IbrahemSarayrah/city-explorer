import React, { Component } from 'react'
import { Form, Button, Tabs, Tab, Table } from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locationData: {},
      targetData: '',
      showTab: false
    }
  }

  submitLocation = async (e) => {
    e.preventDefault();
    await this.setState({
      targetData: e.target.cityName.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ACCESS_TOKEN}&q=${this.state.targetData}&format=json`

    let resData = await axios.get(url);

    this.setState({
      locationData: resData.data[0],
      showTab: true
    })
  }

  render() {

    return (

      <>

        <h1> City Explorer </h1>

        <Form onSubmit={this.submitLocation} value='get data'>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Explore Your City" name='cityName' style = {{textAlign:'center'}} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore
          </Button>
        </Form>

        {this.state.showTab &&
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Location">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.locationData.display_name}</td>
                    <td>{this.state.locationData.lat}</td>
                    <td>{this.state.locationData.lon}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="profile" title="Map">
              <img
                alt=''
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ACCESS_TOKEN}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`}
              />
            </Tab>
          </Tabs>
        }

      </>
    )
  }
}

export default App
