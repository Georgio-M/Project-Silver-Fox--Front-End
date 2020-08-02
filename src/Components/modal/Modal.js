import React, {useEffect, useState, useRef} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";




function Modal(){
    const [isOpen, setIsOpen]= useState(false)


    return(
        <div>
            <button onClick={()=> setIsOpen(! isOpen)}>Update Info</button>
            {isOpen ? (
                <div>

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
            ): null}
        </div>

    )
}
export default Modal;