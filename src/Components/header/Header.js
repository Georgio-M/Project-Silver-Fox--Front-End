import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import QuestionsModal from "../modal/QuestionsModal";

class Header extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            passWord: '',
            admin: '',
            telephone:''

        }
    }
    handleSubmit = () => {
        Axios.post('http://localhost:8080/login', this.state.user)
            .then(response => {
                //store data
                localStorage.setItem("loggedInUser", response.data.email);
                localStorage.setItem("admin", response.data.admin);
                this.props.history.push("/profile")
            }).catch(error => {console.log(error)});
    }

    handleChange =(event) =>{
        const value = event.target.value;
        const name = event.target.name;

        const tempUser = {
            ...this.state.user};
        tempUser[name]= value;
        this.setState({
            user: tempUser
        });

    }

    home =() =>{
        this.props.history.push("/profile");
    }

    admin =() =>{
        this.props.history.push("/admin");
    }



    signOut =() =>{
        localStorage.removeItem("loggedInUser");
        this.props.history.push("/home");
    }



    render() {

        let Links = (
            <li className="nav-item active">
                <Link className="nav-link" to="about">About Us <span className="sr-only">(current)</span></Link>
            </li>
        );

        let signInSignOut = (
            <form className="form-inline mt-2 mt-md-0">
                <input onChange = {this.handleChange} name = "email" value = {this.state.user.email} className="form" type="text" placeholder="Email" aria-label="Search"/>
                <input onChange = {this.handleChange} name = "password" value = {this.state.user.password} className="form" type="text" placeholder="Password" aria-label="Search"/>
                <button onClick ={this.handleSubmit} className="form-button" type="button">Sign In</button>
                <a href={"/register"}>
                <button  className="form-button" type="button">Register</button>
                </a>

            </form>
        );

        if(localStorage.getItem("loggedInUser") && localStorage.getItem("admin")==="Y"){
            signInSignOut =(
                <div>
                    <Col>
                        <Row>
                <button onClick ={this.signOut} className="btn-outline-success" type="button">Sign Out</button>
                            <button onClick={this.home}>My Profile</button>
                            <button onClick={this.admin}>Admin Options</button>
                        </Row>
                    </Col>
                </div>
            );

        }else if(localStorage.getItem("loggedInUser")){
            signInSignOut =(
                <div>
                    <Col>
                        <Row>
                            <button onClick ={this.signOut} className="btn-outline-success" type="button">Sign Out</button>
                            <button onClick={this.home}>My Profile</button>
                        </Row>
                    </Col>
                </div>
            );
        }

        return (
            <div>
                {/* HEADER AREA WHERE VFW
                LOGO IS FOUND */}


                <div className ="header-bottom">
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link to={"/home"}>
                        <img src={"./images/vfw.png"} className={"header-img"} alt={"vfw logo"}/>
                        </Link>

                        <div >

                            {signInSignOut}
                        </div>
                    </nav>

                    <div className={"nav-bar"}>
                        <Nav className="justify-content-end" activeKey="">
                            <Nav.Item>
                                <Nav.Link href="/home" className={"join-color"}>Post 4321</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"/about"} className={"header-color-text"}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {/*<Nav.Link href={"/events"} className={"header-color-text"}>Events</Nav.Link>*/}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"/contactus"} className={"header-color-text"}>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                </div>

                {/* THIS AREA HOUSES THE LINKS TO THE OTHER PAGES.*/}



            </div>

        );
    }
}

export default Header;