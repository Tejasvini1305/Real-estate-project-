import React, { useState } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Header favorites={favorites} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        />

        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default Pages;
