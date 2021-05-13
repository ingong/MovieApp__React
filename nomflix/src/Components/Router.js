import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Components/Header";

// todo
// switch 는 하나의 Route 만 Render 하게 해준다

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tv' component={TV} />
        <Route path='/search' exact component={Search} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
};
