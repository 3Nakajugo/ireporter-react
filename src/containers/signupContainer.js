import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../redux/actions/signupActions';
import SignupComponent from '../components/Signup/Signup';

export class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      telephone: '',
      user_name: '',
      email: '',
      password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      first_name, last_name, telephone, user_name, email, password
    } = this.state;
    const data = {
      first_name:first_name,
      last_name:last_name,
      telephone:telephone,
      user_name:user_name,
      email:email,
      password:password
    }
    this.props.signupAction(data);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render(){
    const { errors } = this.props;
    return (
      <div>
        <SignupComponent
          errors={errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  signup: state.signup.signupResponse,
  error: state.signup.errors
});

export default connect(
  mapStateToProps,
  { signupAction },
)(SignupContainer);
