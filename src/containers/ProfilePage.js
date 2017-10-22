import React, { Component } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import fredericlapatschek from "../images/people/Frederic Lapatschek.jpg";
import Avatar from "material-ui/Avatar";

import AirplanemodeActive from "material-ui/svg-icons/device/airplanemode-active";
import FlightTakeoff from "material-ui/svg-icons/action/flight-takeoff";
import Stars from "material-ui/svg-icons/action/stars";

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled(Title)`font-size: 1em;`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Stat = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StatInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StatTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 300;
`;

const StatValue = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;

const PastTravel = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

  margin-top: 15px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  width: 100%;
`;

const Route = styled.div`
  flex-basis: 30%;
  font-weight: 700;
  font-site: 1.2em;
  text-align: center;
`;

const Dates = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
`;

const DateLabel = styled.div`font-weight: 700;`;
const Outbound = styled(DateLabel)``;
const Inbound = styled(DateLabel)``;

const Label = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: 300;
`;
const OutboundLabel = styled(Label)``;
const InboundLabel = styled(Label)``;

class ProfilePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <Title>My Profile</Title>
        <Centered>
          <Avatar src={fredericlapatschek} size={80} />
          <div style={{ marginTop: "5px" }}>Frederic Lapatschek</div>
          <Subtitle>My Lifetime Stats</Subtitle>
          <Stat>
            <StatInfo>
              <AirplanemodeActive
                color="#cacccd"
                style={{ height: "40px", width: "40px" }}
              />
              <StatTitle>Miles Travelled</StatTitle>
              <StatValue>111,123</StatValue>
            </StatInfo>
          </Stat>
          <Stat>
            <StatInfo>
              <FlightTakeoff
                color="#cacccd"
                style={{ height: "40px", width: "40px" }}
              />
              <StatTitle>Airports Visited</StatTitle>
              <StatValue>16</StatValue>
            </StatInfo>
          </Stat>
          <Stat>
            <StatInfo>
              <Stars
                color="#cacccd"
                style={{ height: "40px", width: "40px" }}
              />
              <StatTitle>Countries Visited</StatTitle>
              <StatValue>8</StatValue>
            </StatInfo>
          </Stat>
          <Subtitle>My Past Travels</Subtitle>
          <PastTravel>
            <Route>
              MUC<br />-<br />CDG
            </Route>
            <Dates>
              <OutboundLabel>Outbound</OutboundLabel>
              <Outbound>18.10.2017 15:40</Outbound>
              <InboundLabel>Inbound</InboundLabel>
              <Inbound>22.10.2017 20:10</Inbound>
            </Dates>
          </PastTravel>
          <PastTravel>
            <Route>
              MUC<br />-<br />JFK
            </Route>
            <Dates>
              <OutboundLabel>Outbound</OutboundLabel>
              <Outbound>03.04.2017 18:10</Outbound>
              <InboundLabel>Inbound</InboundLabel>
              <Inbound>15.04.2017 04:10</Inbound>
            </Dates>
          </PastTravel>
        </Centered>
      </ContentWrapper>
    );
  }
}

export default ProfilePage;
