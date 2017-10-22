import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import KeyboardArrowUp from "material-ui/svg-icons/hardware/keyboard-arrow-up";
import {
  calcBudgetRemaining,
  selectLastItemAdded
} from "../store/cart/reducers";

const FixedBar = styled.div`
  display: ${({ isBudgetSet }) => (isBudgetSet ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  background-color: white;
  padding: 5px 20px 20px;
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.cartZIndex};
`;

const OpenCart = styled.div`
  cursor: pointer;
  align-self: center;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopLine = styled(Line)`font-size: 0.8em;`;
const BottomLine = styled(Line)`font-weight: 300;`;
const Left = styled.div`text-align: left;`;
const Right = styled.div`text-align: right;`;
const LastItemPrice = styled.span`font-size: 0.8em;`;

class Cart extends Component {
  render() {
    const { budgetRemaining, lastItem } = this.props;
    const isBudgetSet = Boolean(budgetRemaining);

    return (
      <FixedBar isBudgetSet={isBudgetSet}>
        <OpenCart>
          <KeyboardArrowUp color="black" />
        </OpenCart>
        <TopLine>
          <Left>Last Item</Left>
          <Right>Budget Remaining</Right>
        </TopLine>
        <BottomLine>
          <Left>
            {lastItem.name}{" "}
            <LastItemPrice>(-{lastItem.price} EUR)</LastItemPrice>
          </Left>
          <Right>{budgetRemaining} EUR</Right>
        </BottomLine>
      </FixedBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    budgetRemaining: calcBudgetRemaining(state),
    lastItem: selectLastItemAdded(state)
  };
}

export default connect(mapStateToProps)(Cart);
