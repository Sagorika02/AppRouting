import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route path="/addContact" component={AddContact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
