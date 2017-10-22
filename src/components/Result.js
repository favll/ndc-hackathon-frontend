import React, { Component } from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import finnair from "../images/finnair.svg";

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  margin-top: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;

const PriceLabel = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-right: 20px;
`;
const BookingLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
const Carrier = styled.div`font-size: 0.8em;`;
const FareClass = styled.div`
  font-weight: 300;
  font-size: 0.8em;
`;
const Slice = styled.div`display: flex;`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Departure = styled(Column)`flex-basis: 35%;`;
const Flight = styled(Column)`
  flex-basis: 30%;
  align-items: center;
`;
const FlightSeparator = styled.div`
  align-self: stretch;
  margin: 8px 0;
  border-top: 1px solid ${({ theme }) => theme.secondaryGray};
`;

const Arrival = styled(Column)`
  flex-basis: 35%;
  align-items: flex-end;
`;

const Airport = styled.div`
  font-size: 0.9em;
  font-weight: 300;
`;
const Origin = styled(Airport)``;
const Destination = styled(Airport)``;

const Time = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const DepartureTime = styled(Time)``;
const ArrivalTime = styled(Time)``;

const Duration = styled.div`font-weight: 300;`;
const Stops = styled.div`
  font-size: 0.8em;
  font-weight: 300;
`;

const SliceSeparator = styled.div`
  margin: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.primaryGray};
`;

class Result extends Component {
  renderBookingLine() {
    const { price, chooseFlight } = this.props;
    return (
      <BookingLine>
        <PriceLabel>{price} EUR</PriceLabel>
        <RaisedButton primary label="Book" onClick={chooseFlight} />
      </BookingLine>
    );
  }

  renderSlice() {
    const { origin, destination, departure, arrival, fareClass } = this.props;
    return (
      <div>
        <TopLine>
          <Carrier>
            <img src={finnair} alt="Finnair" style={{ maxHeight: "10px" }} />
          </Carrier>
          <FareClass>{fareClass}</FareClass>
        </TopLine>
        <Slice>
          <Departure>
            <DepartureTime>{departure}</DepartureTime>
            <Origin>{origin}</Origin>
          </Departure>
          <Flight>
            <Duration>3 h 30 min</Duration>
            <FlightSeparator />
            <Stops>DIRECT</Stops>
          </Flight>
          <Arrival>
            <ArrivalTime>{arrival}</ArrivalTime>
            <Destination>{destination}</Destination>
          </Arrival>
        </Slice>
        <SliceSeparator />
      </div>
    );
  }

  render() {
    const { sliceOnly } = this.props;
    return (
      <ResultWrapper>
        {this.renderSlice()}
        {!sliceOnly && this.renderBookingLine()}
      </ResultWrapper>
    );
  }
}

export default Result;
