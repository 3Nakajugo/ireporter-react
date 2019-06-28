import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/loginAction';
import LoginComponent from '../components/Login/login'

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { user_name, password } = this.state;
    const data = {
      user_name: user_name,
      password: password
    }
    this.props.loginAction(data);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <LoginComponent
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  login: state.login.loginResponse
});

export default connect(
  mapStateToProps,
  { loginAction },
)(LoginContainer);
