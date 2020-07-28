import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


class ContactUs extends Component {
    render() {
        return (
            <>
                <div>
                    <img src="./images/banner2.jpg" fluid alt={"contact us"} className={"home-image"}/>
                </div>
            <div>
                <h1>Contact Post 4321</h1>
            </div>
                <CardDeck className={""}>
                    <Card>
                        <Card.Img variant="top" src="./images/commander.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Post Commander</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/seniorvice.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Senior Vice Commander</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/juniorvice.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Junior Vice Commander</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/quartermaster.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Quartermaster</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/chaplin.jpeg" className={"card-img"}/>
                        <Card.Body>
                            <Card.Title>Chaplin</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                </>
        );
    }
}

export default ContactUs;