import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className={""}
                            src="./images/Veteran1.jpeg"
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={"bs-carousel-item"}>
                        <img
                            className="d-block w-100"
                            src="./images/Veteran2.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Veteran3.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home;