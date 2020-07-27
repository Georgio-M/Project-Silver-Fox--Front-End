import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
    render() {
        return (
            <div>
                {/* HEADER AREA WHERE VFW
                LOGO IS FOUND */}

                <Navbar bg="dark" variant="test" className={"test"}>
                    <Navbar.Brand href="/">
                        <img
                            alt="VFW"
                            src="./images/vfw.png"
                            width="100"
                            height="30"
                            className={"d-inline-block align-top"}
                        />{' '}

                    </Navbar.Brand>
                </Navbar>

            {/* THIS AREA HOUSES THE LINKS TO THE OTHER PAGES.*/}

                <Nav className="justify-content-end" activeKey="/home" >
                    <Nav.Item>
                        <Nav.Link href="/Login" className={"header-color-text"}>Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className={"header-color-text"}>Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={"header-color-text"}>Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" className={"header-color-text-donate"}> Donate</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>

        );
    }
}

export default Header;