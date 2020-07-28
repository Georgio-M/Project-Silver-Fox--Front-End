import React, {Component} from 'react';
import Image from "react-bootstrap/Image";

class About extends Component {
    render() {
        return (
            <div>
                <Image src="./images/aboutus.jpg" fluid />
                <br/>
                <h1>About Page!</h1>
            </div>
        );
    }
}

export default About;