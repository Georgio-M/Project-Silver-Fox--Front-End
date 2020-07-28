import React, {Component} from 'react';
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import Events from "../events/Events";
import {Route} from 'react-router-dom';
import About from "../about/About";
import ContactUs from "../contactus/ContactUs";

class Layout extends Component {
    render() {

        let routes = (
            <div>
                <Route component = {Home} path ="/" exact />
                <Route component={Home} path={"/home"}/>
                <Route component={Events} path={"/events"}/>
                <Route component={About} path={"/about"}/>
                <Route component={ContactUs} path={"/contactus"}/>
            </div>
        );

            return(
                <div>
                    <Header/>
                    {routes}
                    <Footer/>
                </div>
            );

    }
}

export default Layout;