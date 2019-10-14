import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import AdminPage from "./components/admin/AdminPage";
import Login from "./components/login/Login";
import Landing from "./components/layout/Landing";
import Register from "./components/registration/Register";
import ProfileProvider from "./components/utils/ProfileProvider";
import RouteRedirect from "./components/utils/RouteRedirector";
import Band from "./components/band/Band";
import UserDetails from "./components/admin/UserDetails";
import User from "./components/user/User";

const App = () => {
  return (
    <div className="App">
      <ProfileProvider>
        <BrowserRouter>
          <Route path="/" component={Landing} />
          <Switch>
            <Route exact path="/" component={RouteRedirect} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/band" component={Band} />
            <Route exact path="/user-profile" component={User} />
            <Route
              exact
              path="/user-details/:id"
              component={UserDetails}
            />
          </Switch>
        </BrowserRouter>
      </ProfileProvider>
    </div>
  );
};

export default App;
