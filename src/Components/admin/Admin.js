import React, {Component} from 'react';
import Axios from "axios";

class Admin extends Component {
    home =() =>{
        this.props.history.push("/test");
    }

    render() {
        return (
            <div className="col">
                    <form>
                        <div className="form-row mb-3">
                            <div>
                                <button onClick={this.home}> Users</button>
                            </div>
                            <div>
                                <button >Email</button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default Admin;