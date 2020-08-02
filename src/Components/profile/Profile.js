import React, {Component, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import  Axios  from 'axios';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "../modal/Modal";






class Home extends Component {

    state = {
        user: {}
    }

    updateData =() =>{
        this.props.history.push("/test");
    }

    componentDidMount(){
        const params= {
            email: localStorage.getItem("loggedInUser")
        }
        //the below should map to spring on the backend
        Axios.get('http://localhost:8080/findUserById', {params})
            .then(response =>{
                this.setState(
                    {
                        user: response.data
                    });
            }).catch(error =>{});
    }

    render() {

        return (
<>
                            <div>
                                <h1 className="h2">Hey {this.state.user.firstName}</h1>
                            </div>
            <div>
                <Col>
                    <Row>
                Name: {this.state.user.firstName} {this.state.user.lastName}
                </Row>
                    <Row>
                        Birth Date: {this.state.user.dob}
                    </Row>
                    <Row>
                Email: {this.state.user.email}
                    </Row>
                    <Row>
                Phone: {this.state.user.phone}
                    </Row>
                    <Row>
                Address: {this.state.user.street}, {this.state.user.city} {this.state.user.state}, {this.state.user.zip}
                    </Row>
                {/*    TODO MODAL GOES HERE*/}
                <div>
                    <Modal/>
                </div>
                </Col>
            </div>
    </>

        );



    }
}

export default Home;