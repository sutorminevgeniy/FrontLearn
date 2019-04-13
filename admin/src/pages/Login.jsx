import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
    super(props);

		this.onSubmit = this.onSubmit.bind(this);
  }

	onSubmit(event) {
		event.preventDefault();

		this.props.getUser({
			login: this.loginInput.value,
			password: this.passwordInput.value
		});
	};

	render() {
		if(this.props.user) {
			return <Redirect to="/admin/lessons" />;
		}
		return (
			<div className="login">
				<form onSubmit={this.onSubmit}>
					<div className="mdc-textfield">
						<input
							type="text"
							name="login"
							placeholder="Имя пользователя"
							ref={input => this.loginInput = input} />
					</div>

					<div className="mdc-textfield">
						<input
							type="password"
							name="password"
							placeholder="Пароль"
							ref={input => this.passwordInput = input} />
					</div>

					<button type="submit">Войти</button>
				</form>
			</div>
		);
	}
}

export default Login;