import React, { Component } from 'react';
import '../../assests/styles/signup.css'
import Navbar from '../Navbar'

class SignupComponent extends Component {
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
              <p>All feilds must be filled</p>
            </div>
            <div className="card">
              <form id="signup-form" onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  type="text"
                  name="first_name"
                  placeholder="firstname"
                  className="form-control input-field"
                />
                <input
                  onChange={onChange}
                  type="text"
                  name="last_name"
                  placeholder="lastname"
                  className="form-control input-field"
                />
                <input
                  onChange={onChange}
                  type="text"
                  name="telephone"
                  placeholder="telephone"
                  className="form-control input-field"
                />
                <input
                  onChange={onChange}
                  type="text"
                  name="user_name"
                  placeholder="username"
                  className="form-control input-field"
                />
                <input
                  onChange={onChange}
                  type="text"
                  name="email"
                  placeholder="email"
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
                  Signup
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

export default SignupComponent;
