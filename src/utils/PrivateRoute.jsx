import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { token } from '../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token.get()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
