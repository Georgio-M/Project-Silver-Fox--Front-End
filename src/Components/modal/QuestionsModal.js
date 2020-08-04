import React, {useEffect, useState, useRef} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";




function QuestionsModal(){
    const [isOpen, setIsOpen]= useState(false)



    return(
        <div>
            <button onClick={()=> setIsOpen(! isOpen)}>Have a question?</button>
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
                            Update Profile
                        </Button>
                    </Form>

                </div>
            ): null}
        </div>

    )
}
export default QuestionsModal;