import React from "react";
import { Route, Redirect, Switch, useRoute } from "wouter";
import Home from "../views/Home";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Nav from "../components/Nav";
import Search from "../views/Search";

export default function Routes() {
  const [, params] = useRoute("/:id");
  return (
    <>
      {params?.id === "login" ? <span></span> : <Nav />}

      <Switch>
        <Route
          exact
          path="/"
          component={() =>
            localStorage.getItem("token") === null ? (
              <Redirect to={"/login"} />
            ) : (
              <Redirect to={"/home"} />
            )
          }
        />
        <Route
          path="/home"
          component={() =>
            localStorage.getItem("token") === null ? (
              <Redirect to={"/login"} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/search"
          component={() =>
            localStorage.getItem("token") === null ? (
              <Redirect to={"/login"} />
            ) : (
              <Search />
            )
          }
        />
        <Route
          path="/login"
          component={() =>
            localStorage.getItem("token") !== null ? (
              <Redirect to={"/home"} />
            ) : (
              <Login />
            )
          }
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
