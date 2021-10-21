import React, {Component} from "react";

import PropTypes from "prop-types";

export default class Child extends Component {
  render() {
    const {number} = this.props;
    return <div>{number + 2}</div>;
  }
}

Child.propTypes = {
  number: PropTypes.number,
};
