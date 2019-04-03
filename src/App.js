import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

let cities = [
    { name: 'Киев', id: '703448' },
    { name: 'Днепр', id: '709930' },
    { name: 'Львов', id: '702550' },
    { name: 'Харьков', id: '706483' },
    { name: 'Черкассы', id: '710791' },
    { name: 'Донецк', id: '709717' },
    { name: 'Луганск', id: '702658' },
    { name: 'Севастополь', id: '694423' }
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            activeCity: 0
        }
    }

    render() {
        const activeCity = this.state.activeCity;

        return (
            <div className='App'>
                <Container className='wrapper'>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href='/'>
                            Погода (ReactJS)
                        </Navbar.Brand>
                    </Navbar>
                    <div className='app-body'>
                        <Row>
                            <Col md={2} sm={3}>
                                <h3>Города:</h3>
                                <Nav
                                    variant="pills"
                                    className="flex-column"
                                    activeKey={activeCity}
                                    onSelect={index => {
                                        this.setState({ activeCity: index });
                                    }}
                                >
                                    {cities.map((place, index) => (
                                        <Nav.Item key={index} className='text-center'>
                                            <Nav.Link variant='info' eventKey={index}>{place.name}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                            <Col md={10} sm={9}>
                                <WeatherDisplay key={activeCity} id={cities[activeCity].id} cityName={cities[activeCity].name} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;