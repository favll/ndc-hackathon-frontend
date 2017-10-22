import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import styled from "styled-components";
import { Link } from "react-router";
import logoBlue from "../../images/logo_icon.svg";

const Logo = styled.img`
  display: block;
  max-height: 50px;
  margin: 20px auto;
`;

const UnstyledLink = styled(Link)`text-decoration: none;`;

class HeliosDrawer extends Component {
  render() {
    const { open, handleDrawerToggle } = this.props;

    const drawerClose = () => handleDrawerToggle(false);

    return (
      <Drawer
        docked={false}
        width={300}
        open={open}
        onRequestChange={handleDrawerToggle}
      >
        <Logo src={logoBlue} alt="Helios Logo" />
        <UnstyledLink to="/">
          <MenuItem onClick={drawerClose}>Home</MenuItem>
        </UnstyledLink>
        <UnstyledLink to="/profile">
          <MenuItem onClick={drawerClose}>My Profile</MenuItem>
        </UnstyledLink>
      </Drawer>
    );
  }
}

export default HeliosDrawer;
