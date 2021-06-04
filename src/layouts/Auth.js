import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";

//import routes from "routes.js";
import loginroutes from "routesLogin.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";

import register from "assets/img/register.jpeg";
import login from "assets/img/login.jpeg";
import lock from "assets/img/lock.jpeg";
import error from "assets/img/clint-mckoy.jpg";
import pricing from "assets/img/bg-pricing.jpeg";

const useStyles = makeStyles(styles);

export default function Pages(props) {

  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getRoutes = (loginroutes) => {
    return loginroutes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBgImage = () => {
    if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return register;
    } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return login;
    } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return pricing;
    } else if (
      window.location.pathname.indexOf("/auth/login-page") !== -1
    ) {
      return lock;
    } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return error;
    }
  };
  const getActiveRoute = (loginroutes) => {
    let activeRoute = "";
    for (let i = 0; i < loginroutes.length; i++) {
    
    }
    return activeRoute;
  };
  return (
    <div>
      <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPage}
          style={{ backgroundImage: "url(https://ammper.com/wp-content/uploads/2020/08/proyecto-los-cuervos-ammper-energia-mexico-min.jpg)" }}
        >
          <Switch>
            {getRoutes(loginroutes)}
            <Redirect from="/auth" to="/auth/login-page" />
          </Switch>
        </div>
      </div>
    </div>
  );
}
