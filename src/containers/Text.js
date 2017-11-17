import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ctaction } from '../actions';
import { bindActionCreators } from 'redux';

class Text extends Component {

  // handleChange(e) {
  //   dispatch({type:'DO', text:e.target.value});
  // }

  render() {
    return (
      <div className="jumbotron">
        {this.props.text}
        <br />
        <input onChange={(e) => this.props.ctaction(e.target.value)} value={this.props.text} />
      </div>

    )
  }
};

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ctaction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);
