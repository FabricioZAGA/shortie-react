import React from "react";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AdminPage from "./components/AdminPage";
import Login from "./components/Login"
import Error from "./components/Error";
import NewUser from "./components/NewUser"

import "./App.css";

import Logo from "./img/logo.png";

function App() {
  return (
    <div>
      <Router>
        <Container fluid className="app-content m-0 p-0">
          <Switch>
            {/* when user access /home, load Home */}
            <Route path="/home">
              <NavBar />
              <Home />
              <Footer />
            </Route>
            <Route path="/menu/:id">
              <Menu />
              <Footer />
            </Route>
            <Route path="/admin/console/:type/:name">
              <AdminPage num="4" />


            </Route>

            <Route path="/new">
              <NewUser />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="*" status={404}>
              <Error />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
