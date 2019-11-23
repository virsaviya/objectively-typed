import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import Wiki from "./views/Wiki";
import Newsletter from "./views/Newsletter";
import Resources from "./views/Resources";
import Contribute from "./views/Contribute";
import NotFound from "./views/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/wiki" component={Wiki} />
      <Route exact path="/newsletter" component={Newsletter} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/contribute" component={Contribute} />
      <Route exact path="not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
