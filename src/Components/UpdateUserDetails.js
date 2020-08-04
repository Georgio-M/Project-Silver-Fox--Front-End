import React, { Component } from 'react';
import Axios from 'axios';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class UpdateUserDetails extends Component {

    state = {
        user : {
            firstName: '',
            lastName: '',
            dob: '',
            email:'',
            password: '',
            phone: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            currentMember: '',
            memberNumber: ''
        }
    }

    handleSubmit = ()=>{
        Axios.post('http://localhost:8080/updateUser', this.state.user)
            .then(response => {
                //navigate to the response page
                this.props.history.push('/test')
            }).catch(error => {
            // display error message to the user
            this.props.history.push('/error')
        });

    }

    handleChange = (event)=> {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = {...this.state.user};

        tempUser[name]= value;
        this.setState({
            user: tempUser
        });
    }
    render() {
        return (
            <div className = "container">
                <h3>Update My Info</h3>
                <form>
                    <div className="form-row mb-1">
                        <div className="col">
                            <input onChange = {this.handleChange} name = "firstName" value = {this.state.user.firstName} type="text" class="form-control" placeholder={this.state.user.firstName}/>
                        </div>
                        <div className="col">
                            <input onChange = {this.handleChange} name = "lastName" value = {this.state.user.lastName} type="text" class="form-control" placeholder="Last name"/>
                        </div>

                    </div>
                </form>

                <form>
                    <div className="form-row mb-1">

                        <div className="col">
                            <input onChange = {this.handleChange} name = "dob" value = {this.state.user.dob} type="date" class="form-control" placeholder="Date of birth"/>
                        </div>
                        <div className="col">
                            <input onChange={this.handleChange} name="phone" value={this.state.user.phone} type="text"
                                   className="form-control" placeholder="Phone Number"/>
                        </div>

                    </div>
                </form>
                <>
                    <form>
                        <div className="form-row mb-3">

                            <div className={"col"}>
                                <input onChange={this.handleChange} name="email" value={this.state.user.email}
                                       type="text" className="form-control" placeholder="email"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="password"
                                       value={this.state.user.password} type="text" className="form-control"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <Col>
                            <Row>
                                <div className={"col"}>
                                    <input onChange={this.handleChange} name="street" value={this.state.user.street}
                                           type="text" className="form-control" placeholder="street"/>
                                </div>
                                <div className={"col"}>
                                    <input onChange={this.handleChange} name="city" value={this.state.user.city}
                                           type="text" className="form-control" placeholder="city"/>
                                </div>
                                <div className={"col"}>
                                    <input onChange={this.handleChange} name="state" value={this.state.user.state}
                                           type="text" className="form-control" placeholder="state"/>
                                </div>
                                <div className={"col"}>
                                    <input onChange={this.handleChange} name="zip"
                                           value={this.state.user.zip} type="number" className="form-control"
                                           placeholder="zip"/>
                                </div>

                            </Row>
                        </Col>
                    </form>

                    <button onClick={this.handleSubmit} type="button"
                            className="btn btn-secondary btn-lg btn-block">Register
                    </button>
                    <br/>

                </>
            </div>

        );
    }
}

export default UpdateUserDetails;