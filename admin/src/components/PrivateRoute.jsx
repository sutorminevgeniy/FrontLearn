import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ user, component: Component, ...rest }) {
	return (
		<Route {...rest} render={
			props => (
				user ?
					<Component match={rest.computedMatch} />
					:
					<Redirect to="/admin/login" />
			)
		} />
	);
}

export default PrivateRoute;