import React, { Component } from 'react';
import '../../assests/styles/signup.css'
import Navbar from '../Navbar'

class LoginComponent extends Component {
  render() {
    const {
      onChange, onSubmit,
    } = this.props;
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="heading">
              <p>Please Login Here</p>
            </div>
            <div className="card">
              <form id="signup-form" onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  type="text"
                  name="user_name"
                  placeholder="username"
                  className="form-control input-field"
                />
                <input
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control input-field"
                />
                <button className="signup-btn" type="submit">
                  Login
                </button>
              </form>
            </div>
            <div />
            <div className="col-md-4" />
          </div>
        </div>
      </>
    );
  }
}

export default LoginComponent;
