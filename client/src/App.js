import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import NewQuestion from "./views/NewQuestion";
import LeaderBoard from "./views/LeaderBoard";
import Login from "./views/Login";
import Erorr from "./views/Erorr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {this.props.loggedIn ? (
            <div>
              <Switch>
                <Route path="/login" exact>
                  <Login />
                </Route>
              </Switch>
              <Switch>
                <Route path="/" exact>
                  {this.props.loggedIn ? <Login /> : <Home />}
                </Route>
              </Switch>
            </div>
          ) : (
            <div>
              <Switch>
                <Route path="/error" exact>
                  <Erorr />
                </Route>
              </Switch>
              <Switch>
                <Route path="/login" exact>
                  <Login />
                </Route>
              </Switch>
              <Switch>
                <Route path="/" exact>
                  {this.props.loggedIn === null ? (
                    <Login />
                  ) : (
                    <div>
                      <Header />
                      <Home />
                    </div>
                  )}
                </Route>
              </Switch>
              <Switch>
                <Route path="/newQuestion" exact>
                  <Header />
                  <NewQuestion />
                </Route>
              </Switch>
              <Switch>
                <Route path="/leaderboard" exact>
                  <Header />
                  <LeaderBoard />
                </Route>
              </Switch>
            </div>
          )}
        </Router>
      </div>
    );
  }
}
function mapStateToProps({ authenticate }) {
  return {
    loggedIn: authenticate ? authenticate.state === null : true,
    authenticatedUser: authenticate ? authenticate.state : null,
  };
}
export default connect(mapStateToProps)(App);
