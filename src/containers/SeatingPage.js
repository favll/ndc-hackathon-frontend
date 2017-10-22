import React, { Component } from "react";
import styled from "styled-components";
import people from "../utils/people";
import empty from "../images/people/empty.png";
import Avatar from "material-ui/Avatar";
import AccountCircle from "material-ui/svg-icons/action/account-circle";
import Done from "material-ui/svg-icons/action/done";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.contentPadding};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`font-weight: 700;`;

const AirplaneLabel = styled.div`
  font-size: 0.9em;
  margin-top: 20px;
  font-weight: 300;
  text-align: center;
`;
const AirplaneType = styled.div`
  font-size: 1.3em;
  text-align: center;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 300;
  margin-bottom: 15px;
`;

const SeatingWrapper = styled.div`width: 400px;`;

const SeatWrapper = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;

  &:hover {
    background-color: rgba(230, 230, 230, 0.6);
  }
`;

const PersonName = styled.div`
  font-size: 0.7em;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  width: 60px;
`;

const PersonFirstName = styled(PersonName)`margin-top: 10px;`;
const PersonLastName = styled(PersonName)``;

const PersonOrganization = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;

  font-weight: 300;
  font-size: 0.6em;
`;

const RecommendedSeat = () => (
  <SeatWrapper>
    <Avatar
      backgroundColor="seagreen"
      icon={<Done color="white" />}
      size={50}
    />
    <PersonFirstName>Recommended</PersonFirstName>
    <PersonLastName>&nbsp;</PersonLastName>
    <PersonOrganization>&nbsp;</PersonOrganization>
  </SeatWrapper>
);

const AnonymousSeat = () => (
  <SeatWrapper>
    <Avatar icon={<AccountCircle color="white" />} size={50} />
    <PersonFirstName>Anonymous</PersonFirstName>
    <PersonLastName>Traveller</PersonLastName>
    <PersonOrganization>&nbsp;</PersonOrganization>
  </SeatWrapper>
);

const EmptySeat = () => (
  <SeatWrapper>
    <Avatar src={empty} size={50} />
    <PersonFirstName>Choose</PersonFirstName>
    <PersonLastName>Seat</PersonLastName>
    <PersonOrganization>&nbsp;</PersonOrganization>
  </SeatWrapper>
);

const Seat = ({ person }) => {
  if (!person) return <EmptySeat />;
  if (person === "recommended") return <RecommendedSeat />;
  if (person === "anonymous") return <AnonymousSeat />;
  return (
    <SeatWrapper>
      <Avatar src={person.image} size={50} />
      <PersonFirstName>{person.firstName}</PersonFirstName>
      <PersonLastName>{person.lastName}</PersonLastName>
      <PersonOrganization>{person.organization}</PersonOrganization>
    </SeatWrapper>
  );
};

const SeatRowWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Aisle = styled.div`
  display: flex;
  width: 120px;
`;
const LeftAisle = styled(Aisle)``;
const MiddleAisle = styled(Aisle)`
  width: 60px;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
`;
const RightAisle = styled(Aisle)``;

const SeatRow = ({ seatAssignment, rowNumber }) => (
  <SeatRowWrapper>
    <LeftAisle>
      <Seat person={seatAssignment[0]} />
      <Seat person={seatAssignment[1]} />
    </LeftAisle>
    <MiddleAisle>{rowNumber}</MiddleAisle>
    <RightAisle>
      <Seat person={seatAssignment[2]} />
      <Seat person={seatAssignment[3]} />
    </RightAisle>
  </SeatRowWrapper>
);

const Letter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  width: 60px;
`;

const SeatLetters = () => (
  <SeatRowWrapper>
    <Letter>A</Letter>
    <Letter>B</Letter>
    <Letter />
    <Letter>C</Letter>
    <Letter>D</Letter>
  </SeatRowWrapper>
);

class SeatingPage extends Component {
  render() {
    const seatAssignments = [
      [people[4], "anonymous", null, people[5]],
      [null, null, people[6], "anonymous"],
      ["recommended", people[3], "anonymous", null],
      ["anonymous", "anonymous", null, null],
      [people[7], people[8], null, "anonymous"],
      [null, null, people[9], "anonymous"],
      [null, "anonymous", null, people[9]],
      [null, null, people[0], "anonymous"],
      [people[1], "anonymous", null, "anonymous"],
      [null, null, null, "anonymous"],
      [null, null, null, null],
      [null, "anonymous", null, null]
    ];

    return (
      <Wrapper>
        <Title>Choose Seating (+45 EUR)</Title>
        <Description>
          Life is too short for boring conversation. Don't just choose a seat.
          Choose a connection.
        </Description>
        <AirplaneLabel>Airplane</AirplaneLabel>
        <AirplaneType>ATR 72-500</AirplaneType>
        <SeatingWrapper>
          <SeatLetters />
          {seatAssignments.map((seatAssignment, index) => (
            <SeatRow
              key={index}
              seatAssignment={seatAssignment}
              rowNumber={index + 1}
            />
          ))}
        </SeatingWrapper>
      </Wrapper>
    );
  }
}

export default SeatingPage;
