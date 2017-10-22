import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "material-ui/Avatar";
import Checkbox from "material-ui/Checkbox";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Cart from "./Cart";
import ContentWrapper from "../components/ContentWrapper";
import Divider from "../components/Divider";
import people from "../utils/people";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { setBudget, addItem, removeItem } from "../store/cart/actions";
import { isSeatingChosen } from "../store/cart/reducers";
import servicesfixture from "../utils/servicesfixture";
import { GridList, GridTile } from "material-ui/GridList";

import food from "../images/food.jpg";
import visa from "../images/visa.jpg";
import cabin from "../images/cabin.jpg";

const Title = styled.div`
  font-weight: 700;
  margin: 20px 0 10px;
`;

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 300;
  margin-bottom: 5px;
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

const Spacer = styled.div`height: 100px;`;

const Service = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`;

const ServiceName = styled.div`
  font-weight: 300;
  font-size: 0.9em;
`;

const ServicePrice = styled.div``;

class AncillaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      budgetError: false,
      parsedServices: null
    };
  }

  componentDidMount() {
    const data = new window.DOMParser().parseFromString(
      servicesfixture,
      "text/xml"
    );

    const services = data.getElementsByTagName("Service");
    console.log(services);
    const parsedServices = Array.prototype.map.call(services, service => {
      const name = service.getElementsByTagName("Name")[0].innerHTML;
      const price = Number(service.getElementsByTagName("Total")[0].innerHTML);
      return { name, price };
    });
    console.log(parsedServices);

    this.setState({ parsedServices });
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

  renderPriorityServices(services) {
    const { addItem } = this.props;
    // return services.map((service, index) => (
    //   <Service
    //     key={`prio${index}`}
    //     onClick={() => addItem(service.name, service.price)}
    //   >
    //     <ServiceName>{service.name}</ServiceName>
    //     <ServicePrice>{service.price} EUR</ServicePrice>
    //   </Service>
    // ));

    const imageMap = {
      "FOOD AT THE GATE": food,
      "VISA INFORMATION": visa,
      "CABIN UPGRADE": cabin
    };

    return (
      <GridList cellHeight={100} cols={1}>
        {services.map(service => (
          <GridTile
            style={{ cursor: "pointer" }}
            onClick={() => addItem(service.name, service.price)}
            key={service.name}
            title={`${service.name} - ${service.price} EUR`}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={imageMap[service.name]} />
          </GridTile>
        ))}
      </GridList>
    );
  }

  renderServices(services) {
    const { addItem } = this.props;
    return services.map((service, index) => (
      <Service key={index} onClick={() => addItem(service.name, service.price)}>
        <ServiceName>{service.name}</ServiceName>
        <ServicePrice>{service.price} EUR</ServicePrice>
      </Service>
    ));
  }

  render() {
    const {
      budget,
      firstName,
      lastName,
      profilePicture,
      changeRoute,
      isSeatingChosen
    } = this.props;
    let { parsedServices } = this.state;
    const servicesLoaded = Boolean(parsedServices);
    parsedServices = parsedServices || [];

    const priority = ["FOOD AT THE GATE", "VISA INFORMATION", "CABIN UPGRADE"];
    const isPriority = service =>
      (service.name === priority[0]) |
      (service.name === priority[1]) |
      (service.name === priority[2]);

    const prioServices = parsedServices.filter(service => isPriority(service));
    const noPrioServices = parsedServices.filter(
      service => !isPriority(service)
    );
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
          checked={isSeatingChosen}
          label="Choose Seating (+45 EUR)"
          style={{ margin: "0 0 15px" }}
          labelStyle={{ fontSize: "1em", fontWeight: "700" }}
          onCheck={() => changeRoute("/seating")}
        />
        <Description>
          Spent your time in the air by having an interesting exchange with
          these people.
        </Description>
        <Divider />
        <Title>Services Popular with your Peer Group</Title>
        <Description>
          Travellers working in the airline industry love to add these services
          to their booking. Take a look!
        </Description>
        {servicesLoaded && this.renderPriorityServices(prioServices)}
        <Divider />
        <Title>Other Services</Title>
        {servicesLoaded && this.renderServices(noPrioServices)}
        <Divider />
        <RaisedButton
          primary
          label="Finalize Order"
          onClick={() => changeRoute("/checkout")}
        />
        <Spacer />
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
    profilePicture: profileState.get("profilePicture"),
    isSeatingChosen: isSeatingChosen(state)
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
