import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "material-ui/Avatar";
import Checkbox from "material-ui/Checkbox";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import Cart from "./Cart";
import ContentWrapper from "../components/ContentWrapper";
import Divider from "../components/Divider";
import people from "../utils/people";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { setBudget, addItem, removeItem } from "../store/cart/actions";

const Title = styled.div`
  font-weight: 700;
  margin: 20px 0 10px;
`;

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 300;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  font-size: 0.9em;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`;

const PersonFirstName = styled(PersonName)`margin-top: 10px;`;
const PersonLastName = styled(PersonName)``;

const PersonOrganization = styled.div`
  font-weight: 300;
  font-size: 0.8em;
`;

const Person = ({ person }) => (
  <PersonWrapper>
    <Avatar src={person.image} size={65} />
    <PersonFirstName>{person.firstName}</PersonFirstName>
    <PersonLastName>{person.lastName}</PersonLastName>
    <PersonOrganization>{person.organization}</PersonOrganization>
  </PersonWrapper>
);

class AncillaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      budgetError: false
    };
  }

  handleBudgetChange = (event, value) =>
    this.setState({ budget: value, budgetError: false });

  handleVoucherChange = (event, isInputChecked) => {
    const { addItem, removeItem } = this.props;
    if (isInputChecked) {
      addItem("Lounge Voucher", 35);
    } else {
      removeItem("Lounge Voucher");
    }
  };

  submitBudget() {
    const { budget } = this.state;
    const { setBudget } = this.props;
    const converted = Number(budget.replace(",", "."));
    if (!isNaN(converted)) {
      setBudget(converted);
    } else {
      this.setState({ budgetError: true });
    }
  }

  renderBudgetDialog() {
    const { budget, budgetError } = this.state;
    return (
      <Dialog
        title="Enter Budget"
        actions={[
          <FlatButton
            primary
            label="Submit"
            onClick={() => this.submitBudget()}
          />
        ]}
        modal={true}
        open={true}
      >
        To offer you the best travel experience please let us know about your
        total travel budget.
        <TextField
          fullWidth
          value={budget}
          onChange={this.handleBudgetChange}
          errorText={budgetError}
          floatingLabelText="Travel Budget (EUR)"
        />
      </Dialog>
    );
  }

  render() {
    const {
      budget,
      firstName,
      lastName,
      profilePicture,
      changeRoute
    } = this.props;
    return (
      <ContentWrapper>
        {!budget && this.renderBudgetDialog()}
        <Cart />
        <Centered>
          <Title>
            Welcome, {firstName} {lastName}!
          </Title>
          <Avatar src={profilePicture} size={80} />
        </Centered>
        <Divider />
        <Checkbox
          label="Add Lounge Voucher (+35 EUR)"
          style={{ margin: "0 0 15px" }}
          labelStyle={{ fontSize: "1em", fontWeight: "700" }}
          onCheck={this.handleVoucherChange}
        />
        <Description>
          These travellers want to connect with interesting people in the
          business lounge.
        </Description>
        <PeopleWrapper>
          {people
            .slice(4)
            .map(person => <Person key={person.lastName} person={person} />)}
        </PeopleWrapper>
        <Divider />
        <Checkbox
          label="Choose Seating (+45 EUR)"
          style={{ margin: "0 0 15px" }}
          labelStyle={{ fontSize: "1em", fontWeight: "700" }}
          onCheck={() => changeRoute("/seating")}
        />
        <Description>
          Spent your time in the air by having an interesting exchange with
          these people.
        </Description>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  const profileState = state.get("profile");
  return {
    budget: state.get("cart").get("budget"),
    firstName: profileState.get("firstName"),
    lastName: profileState.get("lastName"),
    profilePicture: profileState.get("profilePicture")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBudget: bindActionCreators(setBudget, dispatch),
    addItem: bindActionCreators(addItem, dispatch),
    removeItem: bindActionCreators(removeItem, dispatch),
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AncillaryPage);
