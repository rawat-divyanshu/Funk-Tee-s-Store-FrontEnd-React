import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import UserProfile from "./Other Components/UserProfile";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Cart from "./Other Components/Cart";
import AdminRoute from "./auth/helper/AdminRoutes";
import AdminDashboard from "./admin/AdminDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/profile" exact component={UserProfile} />
        <PrivateRoute path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
