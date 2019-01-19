import React, { Component } from "react";
import PropTypes from "prop-types";

class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  render() {
    return (
      <div className={`app-spinner ${this.props.className}`}>
        <div className="app-spinner__circle" />
      </div>
    );
  }
}

export default Spinner;
