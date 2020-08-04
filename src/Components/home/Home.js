import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import SignUp from "../signup/SignUp";
import Axios from "axios";

class Home extends Component {

    state = {
        user : {
            firstName: '',
            lastName: '',
            email:'',
            password: '',
            phone: '',


        }
    }

    handleSubmit = ()=>{
        Axios.post('http://localhost:8080/submitUserDetails', this.state.user).then(response => {
            //navigate to the response page
            this.props.history.push('/thankyou')
        }).catch(error => {
            // display error message to the user
            this.props.history.push('/error')
        })

    }
    handleChange = (event)=> {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = {...this.state.user};

        tempUser[name]= value;
        this.setState({
            user: tempUser
        });
    }

    render() {
        return (
            <>
                <div>
                    {/*TODO time permitting, resize photos in affinity for sharper images*/}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={"home-image"}
                                src="./images/flag.jpg"
                                alt="First Slide"
                            />
                            <Carousel.Caption className={"carosuel-color2"}>
                                <h1>Welcome to Post 4321</h1>
                                <p>2010 W Morrison Ave, Tampa, FL 33606</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={"bs-carousel-item"}>
                            <img
                                className="home-image"
                                src="./images/banner1.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="home-image"
                                src="./images/banner2.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* TODO update about post and events icons below. Icons need to show text when hovering over them the title and a small blurb*/}
                </div>
                <div data-hover={"test"}>
                    <img src={"./images/banner-noOneDoesMore.png"} className={"banner1"}
                         alt={"No one does more banner"}/>
                </div>

                <div className={"container"}>
                    <Row>
                        <Col>
                            <a href={"/contactus"}>
                                <Image src="./images/postPride.jpg" rounded className={"size"} href={"home"}/>
                            </a>

                            <h2>Contact Post 4321</h2>
                        </Col>
                        <Col>
                            {/*<a href={"events"}>*/}
                            {/*    <Image src={"./images/events.jpg"} rounded className={"size"}/>*/}
                            {/*</a>*/}
                            <h2>Events</h2>
                        </Col>
                    </Row>
                </div>
                <div>
                    <br/>
                <div/>

                    <div>
                        <div className={"mailGroup-Divider"}>
                            <h2>Contact Post 4321?</h2>
                            <Form className={"mailGroup"}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="First Name"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="text" placeholder="Last Name"/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="tel" placeholder="Phone Number"/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="3" placeholder={"How Can Post 4321 Help You?"}/>
                                </Form.Group>

                                <div className={"select"}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Active Member"
                                    />
                                </div>


                                <style type={"text/css"}>
                                    {`
                                .btn-color{
                                    background-color: #991A1E;
                                    color: white;
                            }
                            `}
                                </style>
                                <Button variant="color" size="lg" block>
                                    Contact Us
                                </Button>
                            </Form>
                        </div>

                    </div>

                {/*Cards begin here*/}
                {/*TODO FIGURE SOMETHING OUT FOR THE CARDS HERE*/}
                <div className={"cards"}>
                    <Row>
                        <CardDeck>
                            <Card className={"cards-transition"}>
                                <Card.Img variant="top" src="./images/post4321-children.jpg"/>
                                <Card.Body>
                                    <Card.Title>VFW and the Boy Scouts of America</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={"cards-transition"}>
                                <Card.Img variant="top" src="./images/post4321-recipient.jpg"/>
                                <Card.Body>
                                    <Card.Title>VFW On Your Side</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={"cards-transition"}>
                                <Card.Img variant="top" src="./images/post4321-members.jpg"/>
                                <Card.Body>
                                    <Card.Title>Post 4321 BBQ</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Row>

                </div>

                </div>
                </>
        );
    }
}

export default Home;