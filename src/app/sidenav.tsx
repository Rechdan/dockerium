import styled from "styled-components";

const Container = styled.div`
  flex: 0 0 auto;
  border-right: 2px solid ${(p) => p.theme.colors.black10};
  padding: 1rem 2rem;
  flex-flow: column;
  overflow: auto;
  display: flex;
`;

const Sidenav = () => <Container></Container>;

export default Sidenav;
