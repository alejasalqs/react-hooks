import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TodoApp } from "../components/08-useReducer/TodoApp";
import { MainApp } from "../components/09-useContext/MainApp";

export const PrincipalRouter = () => {
  return (
    <Router>
      <>
        <div className="container">
          <Switch>
            <Route exact path="/usereducer" component={TodoApp} />
            <Route exact path="/usecontext" component={MainApp} />
            <Route exact path="/" component={MainApp} />
            <Redirect to="/usereducer" />
          </Switch>
        </div>
      </>
    </Router>
  );
};
