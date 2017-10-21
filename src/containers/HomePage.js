import React, { Component } from "react";
import styled from "styled-components";
import signinDefault from "./images/Sign-In-Large---Default.png";
import signinHover from "./images/Sign-In-Large---Hover.png";
import signinActive from "./images/Sign-In-Large---Active.png";

const Wrapper = styled.div`padding: ${({ theme }) => theme.contentPadding};`;

const NotificationBox = styled.div`
  background: #5bc0de;
  color: white;
  padding: 20px;
`;

const LinkedinButton = styled.img`
  content: url(${signinDefault});

  &:hover {
    content: url(${signinHover});
  }

  &:active {
    content: url(${signinActive});
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <NotificationBox>Flight Successfully Booked</NotificationBox>
        <LinkedinButton />
      </Wrapper>
    );
  }
}

export default HomePage;
