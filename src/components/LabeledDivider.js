import React from "react";
import styled from "styled-components";
import Divider from "./Divider";

const DividerLabel = styled.div`
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  background-color: white;
  margin-top: -20px;
  color: ${({ theme }) => theme.secondaryGray};
`;

export default ({ labelText }) => (
  <Divider>
    <DividerLabel>{labelText}</DividerLabel>
  </Divider>
);
