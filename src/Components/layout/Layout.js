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

class Layout extends Component {
    render() {

        let routes = (
            <div>
                <Route component={Home} path="/" exact/>
                <Route component={Home} path={"/home"}/>
                <Route component={SignUp} path={"/register"}/>
                <Route component={Events} path={"/events"}/>
                <Route component={About} path={"/about"}/>
                <Route component={ContactUs} path={"/contactus"}/>
                <Route component={ThankYou} path={"/thankyou"}/>
                <Route component={ErrorPage} path={"/error"}/>
                <Route component={Profile} path={"/profile"}/>
            </div>
        );

        return (
            <div>
                <Header/>
                {routes}
                <Footer/>
            </div>
        );

    }
}

export default Layout;