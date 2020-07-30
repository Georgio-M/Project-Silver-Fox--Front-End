import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


class ContactUs extends Component {
    render() {
        return (
            <div className={"test2"}>

                <div>
                    <img src="./images/banner2.jpg" fluid alt={"contact us"} className={"home-image"}/>
                </div>
                <div>
                    <h1 className={"contactus-header"}>Contact Post 4321</h1>
                </div>

                <div className={"row"}>
                    <div className={"post-hours"}>
                        <u>
                            <h3>Post Hours</h3>
                        </u>
                        <dl>
                            <dt> Monday</dt>
                            <dd>12:00 - 9:00pm</dd>
                            <dt>Tuesday</dt>
                            <dd>12:00 - 9:00pm</dd>
                            <dt>Wednesday</dt>
                            <dd>12:00 - 9:00pm</dd>
                            <dt>Thursday</dt>
                            <dd>12:00 - 9:00pm</dd>
                            <dt>Friday</dt>
                            <dd>12:00 - 9:00pm</dd>
                        </dl>

                    </div>
                    <div className={"post-hours"}>
                        <u>
                            <h3>Address</h3>
                        </u>
                        <p>2010 W Morrison Ave, Tampa, FL 33606</p>
                    </div>
                    <div className={"post-hours"}>
                        <u>
                            <h3>Phone Number</h3>
                        </u>
                        <p>(813) - 555 - 5555</p>
                    </div>

                </div>
                <CardDeck className={"contactus-cards"}>
                    <Card>
                        <Card.Img variant="top" src="./images/commander.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Richard Dawson</Card.Title>
                            <Card.Subtitle>Post Commander</Card.Subtitle>
                            <br/>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/seniorvice.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Tommy Ives</Card.Title>
                            <Card.Subtitle>Senior Vice Commander</Card.Subtitle>
                            <br/>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/juniorvice.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Larry Movack</Card.Title>
                            <Card.Subtitle>Junior Vice Commander</Card.Subtitle>
                            <br/>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/quartermaster.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Harry "Top Gun" Stills</Card.Title>
                            <Card.Subtitle>Quartermaster</Card.Subtitle>
                            <br/>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/chaplin.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Tommy Vance</Card.Title>
                            <Card.Subtitle>Chaplin</Card.Subtitle>
                            <br/>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </div>
        );
    }
}

export default ContactUs;