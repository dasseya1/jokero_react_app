import React, { Component } from 'react';
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';


class LoginPage extends Component {

    submit = (data) =>
        this.props.login(data).then(() => this.props.history.push("/"));
        
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }

}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
    login: PropTypes.func.isRequired
};

export default LoginPage;