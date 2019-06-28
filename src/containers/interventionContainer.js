import React, { Component } from 'react';
import { connect } from 'react-redux';
import { interventionAction } from '../redux/actions/interventionAction';
import  InterventionComponent  from '../components/Intervention'


export class InterventionContainer extends Component {
  componentDidMount() {
    this.props.interventionAction();
  }
  render() {
    return (
      <div>
        <InterventionComponent state={this.props} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  interventions: state.interventions.interventionResponse
});

export default connect(mapStateToProps, { interventionAction })(InterventionContainer);
