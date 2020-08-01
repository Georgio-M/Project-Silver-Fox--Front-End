import React, {Component, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import  Axios  from 'axios';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


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
                                <h1 className="h2">{this.state.user.firstName}'s Profile</h1>
                            </div>
            <div>
                <Col>
                    <Row>
                Name: {this.state.user.firstName} {this.state.user.lastName}

                </Row>
                    <Row>
                Email: {this.state.user.email}
                    </Row>
                    <Row>
                Phone: {this.state.user.phone}
                    </Row>
                    <Button variant="primary" onClick={this.showModal}>
                        Update Profile
                    </Button>
                </Col>
            </div>
    </>

        );



    }
}

export default Home;