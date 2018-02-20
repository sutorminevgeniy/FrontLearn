import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
	componentWillMount() {
		this.props.exitUser();
	}

	render() {
		if(!this.props.user) {
			return <Redirect to="/" />;
		}
		return null;
	}
}

export default Logout;