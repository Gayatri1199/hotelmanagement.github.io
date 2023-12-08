import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
// import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* <HeroBanner /> */}
      <BrowserRouter>
        <Nav />
        <Switch>
          Hello from App
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/room/:slug">
            <SingleRoom />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
