import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import logoWhite from "../../images/logo_icon_white.svg";

class NavBar extends Component {
  render() {
    const { onLeftIconButtonTouchTap } = this.props;
    return (
      <AppBar
        onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
        title={
          <img
            src={logoWhite}
            alt="Helios Logo"
            style={{ maxHeight: "30px" }}
          />
        }
        titleStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "-40px"
        }}
      />
    );
  }
}

export default NavBar;
