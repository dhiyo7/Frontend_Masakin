import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import ForgotPass from "./auth/ForgotPass"
import AddRecipe from "./addRecipe/addRecipe";
import SearchPage from './search/search'
import Profile from "./profile/profile";
import { Provider } from "react-redux";
import store from "../redux/store";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPass} />
        <Route path="/addRecipe" component={AddRecipe} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
