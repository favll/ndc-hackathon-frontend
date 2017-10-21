import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import NavBar from "./NavBar";

const theme = {
  contentPadding: "25px"
};

class BasePage extends Component {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <ThemeProvider theme={theme}>
          <div>
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default BasePage;