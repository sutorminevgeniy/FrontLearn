import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ user, component: Component, ...rest }) {
    return (
        <Route {...rest} render={
            props => (
                <Component match={rest.computedMatch} />
				// !!! Заменено на время разработки пока не сделал сессию
				// user ? <Component match={rest.computedMatch} /> : <Redirect to="/admin/login" />
            )
        } />
    );
}

export default PrivateRoute;