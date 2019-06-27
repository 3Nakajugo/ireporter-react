import React, { Component } from 'react';
import '../../assests/styles/home.css';

class Home extends Component {
  handleClick = (e) => {
    e.preventDefault();
    document.location.href = '/signup';
  };

  render() {
    return (
      <div>
        <div>
          <h1> iReporter</h1>
          <div className="intro">
            <p>
              iReporter is an online platform that enables any/every citizen to
              <br />
              bring any form of corruption to the notice of appropriate authorities and the
                    general public.
            </p>
            <div className="index-btn">
              <form>
                <div className="start-btn">
                  <input type="button" value="Get Started" onClick={this.handleClick} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
