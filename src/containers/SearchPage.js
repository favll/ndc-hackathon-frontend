import React, { Component } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Search from "material-ui/svg-icons/action/search";
import DatePicker from "material-ui/DatePicker";
import Checkbox from "material-ui/Checkbox";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import CircularProgress from "material-ui/CircularProgress";
import { getQuotes } from "../services/ndcapi";
import Result from "../components/Result";
import { push } from "react-router-redux";
import { connect } from "react-redux";

const SearchBar = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  display: flex;
  padding: 15px;
  margin-left: -10px;
  margin-right: -10px;
  flex-direction: column;
`;

const SearchBarLabel = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
`;

const Passengers = styled.div`
  display: flex;
  font-size: 0.8em;
  margin-top: -5px;
  justify-content: flex-start;
  align-items: center;
`;

const Route = styled.div`
  display: flex;
  & > div:first-child {
    margin-right: 15px;
  }
  & > div:last-child {
    margin-left: 15px;
  }
`;
const RouteElement = styled.div`flex-basis: calc(50% - 15px);`;

const PassengersLabel = styled.div``;
const PassengersDropDown = styled.div``;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ProgressLabel = styled.div`
  margin-left: 10px;
  font-size: 0.8em;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.parseQuotes = this.parseQuotes.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      loading: false,
      failSafe: false,
      pricing: null,
      segments: null
    };
  }

  renderLoading() {
    return (
      <ProgressWrapper>
        <CircularProgress size={25} thickness={4} />
        <ProgressLabel>Searching for fitting flights</ProgressLabel>
      </ProgressWrapper>
    );
  }

  parseQuotes(data) {
    console.log(data.getElementsByTagName("PricedOffer"));
    const pricedOffers = data.getElementsByTagName("PricedOffer");
    const pricing = Array.prototype.map.call(pricedOffers, pricedOffer => {
      const price = Number(
        pricedOffer.getElementsByTagName("SimpleCurrencyPrice")[0].innerHTML
      );
      const fareClass = pricedOffer.getElementsByTagName(
        "PriceClassReference"
      )[0].innerHTML;
      const segmentId = pricedOffer
        .getElementsByTagName("FlightSegmentReference")[0]
        .getAttribute("ref");
      return { price, segmentId, fareClass };
    });

    const segments = data.getElementsByTagName("FlightSegment");
    let parsedSegments = {};

    Array.prototype.map.call(segments, segment => {
      const segmentId = segment.getAttribute("SegmentKey");

      const departure = segment.getElementsByTagName("Departure")[0];
      const departureTime = departure.getElementsByTagName("Time")[0].innerHTML;
      const origin = segment.getElementsByTagName("AirportCode")[0].innerHTML;

      const arrival = segment.getElementsByTagName("Arrival")[0];
      const arrivalTime = arrival.getElementsByTagName("Time")[0].innerHTML;
      const destination = segment.getElementsByTagName("AirportCode")[0]
        .innerHTML;

      parsedSegments[segmentId] = {
        segmentId,
        departure: departureTime,
        origin,
        arrival: arrivalTime,
        destination
      };
    });

    this.setState({ pricing, segments: parsedSegments });
  }

  search() {
    const origin = "CDG";
    const destination = "RVN";
    const departure = "2017-10-23";
    const passengers = 1;
    try {
      getQuotes(origin, destination, departure, passengers)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => this.parseQuotes(data))
        .catch(() => this.setState({ failSafe: true }))
        .then(() => this.setState({ loading: false }));
    } catch (err) {
      this.setState({ loading: false, failSafe: true });
    }
  }

  renderFailSafe() {
    const { changeRoute } = this.props;

    return (
      <div>
        <Result
          fareClass="Economy"
          origin="CDG"
          destination="RVN"
          departure="08:30"
          arrival="12:00"
          price="206"
          chooseFlight={() => changeRoute("/linkedin")}
        />
        <Result
          fareClass="Business"
          origin="CDG"
          destination="RVN"
          departure="08:30"
          arrival="12:00"
          price="604"
          chooseFlight={() => changeRoute("/linkedin")}
        />
      </div>
    );
  }

  renderResults() {
    const { changeRoute } = this.props;
    const { pricing, segments } = this.state;

    return pricing.map((offer, index) => {
      const segment = segments[offer.segmentId];
      return (
        <Result
          key={index}
          fareClass={offer.fareClass}
          origin={segment.origin}
          destination={segment.destination}
          departure={segment.departure}
          arrival={segment.arrival}
          price={offer.price}
          chooseFlight={() => changeRoute("/linkedin")}
        />
      );
    });
  }

  render() {
    const { loading, failSafe, pricing, segments } = this.state;

    return (
      <ContentWrapper>
        <SearchBar>
          <SearchBarLabel>Search</SearchBarLabel>
          <Route>
            <RouteElement>
              <TextField
                fullWidth
                value="Paris (CDG)"
                floatingLabelText="Origin"
              />
            </RouteElement>
            <RouteElement>
              <TextField
                fullWidth
                value="Rovaniemi (RVN)"
                floatingLabelText="Destination"
              />
            </RouteElement>
          </Route>
          <Checkbox style={{ fontSize: "0.8em" }} label="Return" />
          <DatePicker
            fullWidth
            hintText="Departure"
            floatingLabelText="Departure"
            style={{ marginTop: "-20px" }}
          />
          <Passengers>
            <PassengersLabel>Passengers:</PassengersLabel>
            <PassengersDropDown>
              <DropDownMenu value={1}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={3} primaryText="3" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={5} primaryText="5" />
              </DropDownMenu>
            </PassengersDropDown>
          </Passengers>
          <FloatingActionButton
            style={{ marginTop: "10px", alignSelf: "center" }}
            onClick={this.search}
          >
            <Search color="white" />
          </FloatingActionButton>
        </SearchBar>
        {loading && this.renderLoading()}
        {failSafe && this.renderFailSafe()}
        {pricing && segments && this.renderResults()}
      </ContentWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(null, mapDispatchToProps)(SearchPage);
