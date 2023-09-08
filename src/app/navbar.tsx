import styled from "styled-components";

const Container = styled.div`
  flex: 0 0 auto;
  background-color: ${(p) => p.theme.colors.black60};
  align-items: baseline;
  padding: 1rem 2rem;
  flex-flow: row;
  display: flex;
`;

const Title = styled.div`
  flex: 0 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Navbar = () => (
  <Container>
    <Title>Dockerium</Title>
  </Container>
);

export default Navbar;
