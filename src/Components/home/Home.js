import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel className={""}>
                    <Carousel.Item>
                        <img
                            className={"home-image"}
                            src="./images/banner2.jpg"
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={"bs-carousel-item"}>
                        <img
                            className="home-image"
                            src="./images/banner1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="home-image"
                            src="./images/flag.jpg"
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