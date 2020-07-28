import React, {Component} from 'react';
import Media from "react-bootstrap/Media";

class Events extends Component {
    render() {
        return (
            <div className={"events-container"}>

                <h1 className={"container"}>This is the Events page!</h1>
                <ul className="list-styled">
                    <h4 className={"container"}>March 2020</h4>
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="./images/icon-breakfast.png"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Sunday Breakfast</h5>
                            <h6>March 23</h6>
                            <p>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="./images/icon-event.png"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Monthly Post Meeting</h5>
                            <h6>March 30</h6>
                            <p>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="./images/icon-burger.png"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Post BBQ</h5>
                            <h6>April 5</h6>
                            <p>
                            </p>
                        </Media.Body>
                    </Media>
                </ul>
            </div>
        );
    }
}

export default Events;