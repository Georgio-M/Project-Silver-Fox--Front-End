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
                    <Navbar.Brand href="/home">
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

                <Nav className="justify-content-end" activeKey="" >
                    <Nav.Item>
                        <Nav.Link href="https://www.vfw.org/join" className={"join-color"}>Join</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href={"/about"} className={"header-color-text"}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={"/events"} className={"header-color-text"}>Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={"/contactus"} className={"header-color-text"}>Contact Us</Nav.Link>
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