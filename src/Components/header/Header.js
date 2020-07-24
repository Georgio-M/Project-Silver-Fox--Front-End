import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";


class Header extends Component {
    render() {
        return (
            <div>
                {/* HEADER AREA WHERE VFW
                LOGO IS FOUND */}

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt="VFW"
                            src="./images/vfw.png"
                            width="100"
                            height="30"
                            className={"Header"}
                        />{' '}

                    </Navbar.Brand>
                </Navbar>
                <br/>
            {/* THIS AREA HOUSES THE LINKS TO THE OTHER PAGES.*/}

            </div>
        );
    }
}

export default Header;