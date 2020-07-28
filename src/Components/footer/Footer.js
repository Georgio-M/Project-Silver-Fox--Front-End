import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <img src={"./images/vfw-logo2.png"} className={"footer-image"} alt={"National VFW Organization"}/>

                <Nav className="justify-content-left" activeKey="/home" >
                    <Nav.Item>
                        <Nav.Link href="/home" className={"footer"}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className={"footer"}>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={"footer"}>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>

        );
    }
}

export default Footer;