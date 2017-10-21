import styled from "styled-components";

const Divider = styled.div`
  background-color: ${({ theme }) => theme.primaryGray};
  border: none;
  display: flex;
  height: 1px;
  margin-bottom: 25px;
  margin-top: 25px;
  justify-content: center;
`;

export default Divider;
