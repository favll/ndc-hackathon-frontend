import React, { Component } from "react";
import styled from "styled-components";
import Aux from "react-aux";
import ContentWrapper from "../components/ContentWrapper";
import LabeledDivider from "../components/LabeledDivider";
import DoneAll from "material-ui/svg-icons/action/done-all";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import signinDefault from "../images/linkedin/Sign-In-Large---Default.png";
import signinHover from "../images/linkedin/Sign-In-Large---Hover.png";
import signinActive from "../images/linkedin/Sign-In-Large---Active.png";
import LinkedIn from "../components/LinkedIn";
import Result from "../components/Result";
import RaisedButton from "material-ui/RaisedButton";
import { getAccessToken, getPersonalInformation } from "../services/api";
import { LINKEDIN_CLIENT_ID } from "../utils/constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setProfile } from "../store/profile/actions";
import { push } from "react-router-redux";
import fredericlapatschek from "../images/people/Frederic Lapatschek.jpg";

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #5bc0de;
  color: white;
  padding: 20px;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  & > p {
    margin-left: 15px;
  }
`;
const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8em;
  margin-top: 10px;
  text-align center;
`;

const Title = styled.div`
  font-weight: 700;
  margin: 20px 0 10px;
`;

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 300;
  margin-bottom: 10px;
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

class LinkedInPage extends Component {
  constructor(props) {
    super(props);
    this.callbackLinkedIn = this.callbackLinkedIn.bind(this);
    this.state = {
      accessToken: null
    };
  }

  callbackLinkedIn({ code, redirectUri }) {
    const { setProfile, changeRoute } = this.props;

    getAccessToken(code, redirectUri)
      .then(resp => {
        this.setState({
          accessToken: resp.access_token
        });
        localStorage.accessToken = resp.access_token;
      })
      .then(() =>
        getPersonalInformation().then(resp =>
          setProfile(resp.firstName, resp.lastName, resp.pictureUrl)
        )
      )
      .catch(() => setProfile("Frederic", "Lapatschek", fredericlapatschek))
      .then(() => changeRoute("/ancillary"));
  }

  renderLogin() {
    return (
      <Aux>
        <Title>Meet your peers</Title>
        <Description>
          Connect your LinkedIn Account to this booking and unlock the Helios
          experience.
        </Description>
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

  renderLoggedIn() {}

  render() {
    const isLoggedIn = Boolean(this.state.accessToken);

    return (
      <ContentWrapper>
        <NotificationBox>
          <TopLine>
            <DoneAll color="white" />
            <p>We have reserved a seat on the following flight for you.</p>
          </TopLine>
        </NotificationBox>
        <Result
          sliceOnly
          fareClass="Economy"
          origin="CDG"
          destination="RVN"
          departure="08:30"
          arrival="12:00"
          price="604"
        />
        {!isLoggedIn && this.renderLogin()}
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setProfile: bindActionCreators(setProfile, dispatch),
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedInPage);
