import React, { Component } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import DoneAll from "material-ui/svg-icons/action/done-all";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 25px;
`;
const Description = styled.div`
  text-align: center;
  margin-top: 25px;
  font-weight: 300;
`;

class FinalPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <Centered>
          <Title>Your booking was confirmed.</Title>
          <DoneAll color="#cacccd" style={{ width: "50px", height: "50px" }} />
          <Description>
            A confirmation of your booking will be sent to your company's travel
            department.
          </Description>
        </Centered>
      </ContentWrapper>
    );
  }
}

export default FinalPage;
