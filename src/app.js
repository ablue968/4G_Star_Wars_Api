import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import injectContext from "./store"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import Detail from "./pages/pageDescription.js"

export default injectContext(function(props) {
    return (
        <Router>
            <Navbar />
            
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/character/:id">
                        <Detail type="characters"/>
                    </Route>

                    <Route path="/planets/:id">
                        <Detail type="planets"/>
                    </Route>

                    {/* <Route path="/vehicles/:id">
                        <Detail type="vehicles"/>
                    </Route> */}
                </Switch>
            </div>

            <Footer />
        </Router>
    )
})