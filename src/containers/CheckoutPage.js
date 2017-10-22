import React, { Component } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import { connect } from "react-redux";
import { getItems } from "../store/cart/reducers";
import Divider from "../components/Divider";
import RaisedButton from "material-ui/RaisedButton";
import { push } from "react-router-redux";

const Title = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.div`
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 300;
`;

const ItemPrice = styled.div`
  font-size: 1em;
  font-weight: 700;
`;

const Sum = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2em;
`;
const SumLabel = styled.div`font-weight: 300;`;

const SumAmount = styled.div`
  font-weight: 400;
  margin-left: 15px;
`;

class CheckoutPage extends Component {
  renderItems() {
    const { items } = this.props;
    return items.map((item, index) => (
      <Item key={index}>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price} EUR</ItemPrice>
      </Item>
    ));
  }

  render() {
    const { items, changeRoute } = this.props;
    const calcSum = items => items.reduce((acc, item) => acc + item.price, 0);

    return (
      <ContentWrapper>
        <Title>Shopping Cart</Title>
        {items && this.renderItems()}
        <Divider />
        <Sum>
          <SumLabel>TOTAL</SumLabel>
          {items && <SumAmount>{calcSum(items)} EUR</SumAmount>}
        </Sum>

        <RaisedButton
          style={{ marginTop: "20px" }}
          primary
          fullWidth
          label="Confirm & Send to company"
          onClick={() => changeRoute("/final")}
        />
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: getItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
