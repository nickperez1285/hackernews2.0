import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// checks for token in lical storage  before proceeding to route

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props =>
        // conditonal verification setup
        localStorage.getItem('status') ? (
            <Component {...props} />
            ) : (
            <Redirect to="/login" />
            )
        }
        />
    );
};

export default PrivateRoute;