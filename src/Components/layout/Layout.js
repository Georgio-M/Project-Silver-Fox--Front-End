import React, {Component} from 'react';
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import Events from "../events/Events";
import {Route} from 'react-router-dom';
import About from "../about/About";
import ContactUs from "../contactus/ContactUs";
import SignUp from "../signup/SignUp";
import ThankYou from "../thankyou/ThankYou";
import ErrorPage from "../thankyou/ErrorPage";
import Profile from "../profile/Profile";
import {withRouter} from "react-router";
import QuestionsModal from "../modal/QuestionsModal";
import Admin from "../admin/Admin";
import UpdateUserDetails from "../UpdateUserDetails";
import AllUsers from "../findAllUsers/AllUsers";

class Layout extends Component {
    render() {

        let routes = (
            <div>
                <Route component={Home} path="/" exact/>
                <Route component={Home} path={"/home"}/>
                <Route component={SignUp} path={"/register"}/>
                <Route component={About} path={"/about"}/>
                <Route component={ContactUs} path={"/contactus"}/>
                <Route component={ThankYou} path={"/thankyou"}/>
                <Route component={ErrorPage} path={"/error"}/>
                <Route component={Admin} path={"/admin"}/>
                <Route component={QuestionsModal} path={"/modal"}/>
                <Route component={UpdateUserDetails} path={"/update"}/>
            </div>
        );

        if(localStorage.getItem("loggedInUser")){
            routes = (
                <div>
                    <Route component={Admin} path={"/admin"}/>
                    <Route component = {Home} path = "/home" />
                    <Route component={Events} path={"/events"}/>
                    <Route component={ContactUs} path={"/contactus"}/>
                    <Route component={AllUsers} path={"/test"}/>
                    <Route component={Profile} path={"/profile"}/>
                    <Route component={UpdateUserDetails} path={"/update"}/>
                    <Route component={ErrorPage} path={"/error"}/>


                </div>
            );
        }

        return (
            <div>
                <Header {...this.props}/>
                {routes}
                <Route component = {About} path = "/aboutus" />
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Layout);
