import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from "../AboutScreen";
import { HomeScreen } from "../HomeScreen";
import { LoginScreen } from "../LoginScreen";
import { NavBar } from "../NavBar";

export const AppRouter = () => {
  // La ruta mas general va hasta abajo
  // se recomienda usar exact
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="usecontext/about" component={AboutScreen} />
          <Route exact path="usecontext/login" component={LoginScreen} />
          <Route exact path="usecontext/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
