import React, { Component } from "react";
import styled from "styled-components";
import Aux from "react-aux";
import LabeledDivider from "../components/LabeledDivider";
import Divider from "../components/Divider";
import DoneAll from "material-ui/svg-icons/action/done-all";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import signinDefault from "../images/linkedin/Sign-In-Large---Default.png";
import signinHover from "../images/linkedin/Sign-In-Large---Hover.png";
import signinActive from "../images/linkedin/Sign-In-Large---Active.png";
import LinkedIn from "../components/LinkedIn";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import Checkbox from "material-ui/Checkbox";
import people from "../utils/people";
import {
  getAccessToken,
  getPersonalInformation,
  getPicture
} from "../services/api";
import { LINKEDIN_CLIENT_ID } from "../utils/constants";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.contentPadding};
  display: flex;
  flex-direction: column;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NotificationBox = styled.div`
  display: flex;
  justify-content: center;
  background: #5bc0de;
  color: white;
  padding: 20px;
  & > p {
    margin-left: 15px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  margin: 20px 0 10px;
`;

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 300;
`;

const StyledLinkedIn = styled(LinkedIn)`
  background-image: url(${signinDefault});
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;

  /* Height and width are calculated, only change in proportion */
  height: 35px;
  width: 188px;
  align-self: center;

  &:hover {
    background-image: url(${signinHover});
  }

  &:active {
    background-image: url(${signinActive});
  }
`;

const PeopleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 15px;
`;

const PersonName = styled.div`
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: 700;
`;

const PersonOrganization = styled.div`
  font-weight: 300;
  font-size: 0.8em;
`;

const Person = ({ person }) => (
  <PersonWrapper>
    <Avatar src={person.image} size={65} />
    <PersonName>{person.name}</PersonName>
    <PersonOrganization>{person.organization}</PersonOrganization>
  </PersonWrapper>
);

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.callbackLinkedIn = this.callbackLinkedIn.bind(this);
    this.state = {
      accessToken: null,
      pictureUrl: null,
      name: null
    };
  }

  callbackLinkedIn({ code, redirectUri }) {
    getAccessToken(code, redirectUri)
      .then(resp => {
        this.setState({
          accessToken: resp.access_token
        });
        localStorage.accessToken = resp.access_token;
      })
      .then(() =>
        getPersonalInformation().then(resp =>
          this.setState({ name: `${resp.firstName} ${resp.lastName}` })
        )
      )
      .then(() =>
        getPicture().then(resp =>
          this.setState({ pictureUrl: resp.pictureUrl })
        )
      )
      .catch(console.log);
  }

  renderLogin() {
    return (
      <Aux>
        <Title>Meet your peers</Title>
        <StyledLinkedIn
          clientId={LINKEDIN_CLIENT_ID}
          callback={this.callbackLinkedIn}
        />
        <LabeledDivider labelText="OR" />
        <RaisedButton
          primary
          icon={<ChevronRight color="white" />}
          label="Or continue without"
          labelPosition="before"
        />
      </Aux>
    );
  }

  renderLoggedIn() {
    const { pictureUrl, name } = this.state;

    return (
      <Centered>
        <Title>Welcome, {name}!</Title>
        <Avatar src={pictureUrl} size={80} />
      </Centered>
    );
  }

  render() {
    const isLoggedIn = Boolean(this.state.accessToken);

    return (
      <Wrapper>
        <NotificationBox>
          <DoneAll color="white" />
          <p>Flight Successfully Booked</p>
        </NotificationBox>
        {!isLoggedIn && this.renderLogin()}
        {isLoggedIn && this.renderLoggedIn()}
        <Divider />
        <Checkbox
          label="Add Lounge Voucher (+35 EUR)"
          style={{ margin: "0 0 15px" }}
          labelStyle={{ fontSize: "1em", fontWeight: "700" }}
        />
        <Description>
          These travellers want to connect with interesting people in the
          business lounge.
        </Description>
        <PeopleWrapper>
          {people.map(person => <Person key={person.name} person={person} />)}
        </PeopleWrapper>
        <Divider />
        <Checkbox
          label="Choose Seating (+45 EUR)"
          style={{ margin: "0 0 15px" }}
          labelStyle={{ fontSize: "1em", fontWeight: "700" }}
        />
        <Description>
          Spent your time in the air by having an interesting exchange with
          these people.
        </Description>
      </Wrapper>
    );
  }
}

export default HomePage;
