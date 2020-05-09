import React, { useContext } from "react";
import { AppContext } from "./contexts/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import TransferMoney from "./components/TransferMoney";
import CustomerCare from "./components/CustomerCare";
import Error404 from "./components/Error404";
import UserProfile from "./components/UserProfile";
import AdminDashboard from "./components/AdminDashboard";
import AdminEditUserProfile from "./components/AdminEditUserProfile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/dashboard/transfer" component={TransferMoney} />
        <PrivateRoute exact path="/dashboard/profile" component={UserProfile} />
        <PrivateRoute exact path="/dashboard/support" component={CustomerCare} />
        <PrivateRoute exact path="/dashboard/support" component={CustomerCare} />
        <PrivateRoute exact path="/admin" component={AdminDashboard} />
        <PrivateRoute exact path="/admin/profile/:id" component={AdminEditUserProfile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated] = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
      }
    />
  );
};

export default App;