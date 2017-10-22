import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.contentPadding};
  display: flex;
  flex-direction: column;
`;

export default ContentWrapper;
