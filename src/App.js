import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import View from "./View";
import Menu from "./Menu";
import Footer from "./Footer";

const App = () =>{
  return(
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={View}></Route>
        <Route exact path="/menu" component={Menu}></Route>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;