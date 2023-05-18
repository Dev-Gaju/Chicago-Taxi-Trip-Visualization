import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="bg-[#f7f7f7]">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/iansarker" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
