import React, { Component } from 'react';
import Axios from 'axios';

class SignUp extends Component {

    state = {
        user : {
            firstName: '',
            lastName: '',
            age: '',
            email:'',
            password: '',
            phone: '',


        }
    }

    handleSubmit = ()=>{
        Axios.post('http://localhost:8080/submitUserDetails', this.state.user).then(response => {
            //navigate to the response page
            this.props.history.push('/thankyou')
        }).catch(error => {
            // display error message to the user
            this.props.history.push('/error')
        })

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
                <h3>Register Below!!</h3>
                <form>
                    <div className="form-row mb-1">
                        <div className="col">
                            <input onChange = {this.handleChange} name = "firstName" value = {this.state.user.firstName} type="text" class="form-control" placeholder="First name"/>
                        </div>
                        <div className="col">
                            <input onChange = {this.handleChange} name = "lastName" value = {this.state.user.lastName} type="text" class="form-control" placeholder="Last name"/>
                        </div>

                    </div>
                </form>

                <form>
                    <div className="form-row mb-1">
                        <div className="col">
                            <input onChange = {this.handleChange} name = "age" value = {this.state.user.age} type="text" class="form-control" placeholder="age"/>
                        </div>
                        <div className="col">
                            <input onChange = {this.handleChange} name = "password" value = {this.state.user.password} type="text" class="form-control" placeholder="password"/>
                        </div>

                    </div>
                </form>

                <form>
                    <div className="form-row mb-3">
                        <div className={"col"}>
                            <input onChange={this.handleChange} name="email" value={this.state.user.email}
                                   type="text" className="form-control" placeholder="email"/>
                        </div>
                        <div className="col">
                            <input onChange={this.handleChange} name="phone"
                                   value={this.state.user.phone} type="text" className="form-control"
                                   placeholder="Phone Number"/>
                        </div>

                    </div>
                    <button onClick={this.handleSubmit} type="button"
                            className="btn btn-secondary btn-lg btn-block">Register
                    </button>

                </form>
            </div>

        );
    }
}

export default SignUp;