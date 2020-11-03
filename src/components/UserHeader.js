import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const getEachuUser = (state, ownProps) => {
  console.log("own props", ownProps.userId);
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(getEachuUser)(UserHeader);
