import styled from "styled-components";

export const Card = styled.div`
  flex: 0 0 auto;
  background-color: ${(p) => p.theme.colors.white05};
  border: 1px solid ${(p) => p.theme.colors.white10};
  border-radius: 1rem;
  flex-flow: column;
  display: flex;
  padding: 1rem;
`;

export const CardTitle = styled.div``;

export const CardBody = styled.div``;
