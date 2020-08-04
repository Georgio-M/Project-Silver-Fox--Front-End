import React, { Component } from 'react';
import Axios from 'axios';


class AdminUpdateUsers extends Component {

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
            memberNumber: '',
            admin: '',
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
                <h3>Update A User</h3>
                <p className={"requiredFields"}>All Fields Are Required</p>
                <form>
                    <div className="form-row mb-1">
                        <div className="col">
                            <input onChange = {this.handleChange} name = "firstName" value = {this.state.user.firstName} type="text" class="form-control" placeholder={"First Name"} />
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

                <form>
                    <div className="form-row mb-1">

                        <div className={"col"}>
                            <input onChange={this.handleChange} name="email" value={this.state.user.email}
                                   type="text" className="form-control" placeholder="email" required/>
                        </div>
                        <div className="col">
                            <input onChange={this.handleChange} name="password"
                                   value={this.state.user.password} type="text" className="form-control"
                                   placeholder="Password" required/>
                        </div>
                    </div>

                    <form>
                        <div className="form-row mb-1">

                            <div className="col">
                                <input onChange={this.handleChange} name="street" value={this.state.user.street}
                                       type="text" className="form-control" placeholder="street"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="city" value={this.state.user.city}
                                       type="text" className="form-control" placeholder="city"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="state" value={this.state.user.state}
                                       type="text" className="form-control" placeholder="state"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="zip"
                                       value={this.state.user.zip} type="text" className="form-control"
                                       placeholder="Zip" required/>
                            </div>
                        </div>
                    </form>
                    <form>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input onChange={this.handleChange} name="memberNumber" value={this.state.user.memberNumber}
                                       type="text" className="form-control" placeholder="Member Number"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="currentMember" value={this.state.user.currentMember}
                                       type="text" className="form-control" placeholder="Member Status"/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleChange} name="admin" value={this.state.user.admin}
                                       type="text" className="form-control" placeholder="Is User Admin?"/>
                            </div>
                        </div>
                    </form>
                </form>

                <button onClick={this.handleSubmit} type="button"
                        className="btn btn-secondary btn-lg btn-block">Update
                </button>
                <br/>

            </div>

        );
    }
}

export default AdminUpdateUsers;