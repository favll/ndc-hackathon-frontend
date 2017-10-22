import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import NavBar from "./NavBar";
import HeliosDrawer from "./HeliosDrawer";

const theme = {
  primary: "rgb(0, 188, 212)",
  contentPadding: "25px",
  primaryGray: "#cacccd",
  secondaryGray: "#aaa",
  cartZIndex: 300
};

class BasePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  handleDrawerToggle = drawerOpen => this.setState({ drawerOpen });

  render() {
    const { children } = this.props;
    const { drawerOpen } = this.state;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <ThemeProvider theme={theme}>
          <div>
            <HeliosDrawer
              open={drawerOpen}
              handleDrawerToggle={this.handleDrawerToggle}
            />
            <NavBar
              onLeftIconButtonTouchTap={() => this.handleDrawerToggle(true)}
            />
            {children}
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default BasePage;
