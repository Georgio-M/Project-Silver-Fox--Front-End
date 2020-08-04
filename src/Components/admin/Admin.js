import React, {Component} from 'react';
import Axios from "axios";

class Admin extends Component {
    home =() =>{
        this.props.history.push("/test");
    }
    addMember =() =>{
        this.props.history.push("/adminadd");
    }

    render() {
        return (
            <div className="col">
                    <form>
                        <div className="form-row mb-3">
                            <div>
                                <button onClick={this.home}> Current Users</button>
                            </div>
                            <div>
                                <button onClick={this.addMember}> Add Users</button>
                            </div>

                            <div>
                                <button >Contact Users</button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default Admin;