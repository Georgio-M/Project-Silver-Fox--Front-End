import React from 'react';
import axios from 'axios';
import Axios from "axios";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Test from "../modal/test";

class AllUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

        componentDidMount() {
            axios.get('http://localhost:8080/findAll')
                .then(res => {
                    const user = res.data;
                    this.setState({ user });
                })
        }

    handleDelete = (index)=>{
        Axios.post(`http://localhost:8080/deleteUsers?email=${this.state.user[index].email}`).then(response => {
            let updatedUsers= this.state.user.filter((user, i)=> i !== index)
            this.setState({user: updatedUsers})
            //this.props.history.push('/test')
        }).catch(error => {
            // display error message to the user
            this.props.history.push('/error')
        });

    }

    handleUpdate = ()=>{
        Axios.post('http://localhost:8080/updateUser')
            .then(response => {
            //navigate to the response page
            this.props.history.push('/test')
        }).catch(error => {
            // display error message to the user
            this.props.history.push('/error')
        });

    }

    updateUser =() =>{
        this.props.history.push("/adminupdate");
    }
        render() {

            return (
                <div className="App">
                    <div className="left">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>Member Number</th>
                                <th>Status</th>
                                <th>Admin?</th>
                            </tr>
                            { this.state.user.map((user,index) =>
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.street} {user.city} {user.state} {user.zip}</td>
                                    <td>{user.memberNumber}</td>
                                    <td>{user.currentMember}</td>
                                    <td>{user.admin}</td>
                                    <td>
                                            <Col>
                                                <Row>
                                                    <button onClick={()=>this.handleDelete(index)}>Delete</button>
                                                    <button onClick={this.updateUser}>Update</button>
                                                </Row>
                                            </Col>
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>    </div>
            );
        }
    }
    export default AllUsers;