import styled from "styled-components";

type ContainerProps = {
  $flexGrow?: string;
  $flexShrink?: string;
  $flexBasis?: string;
  $padding?: string;
};

export const Container = styled.div<ContainerProps>`
  flex: ${(p) => `${p.$flexGrow || 0} ${p.$flexShrink || 0} ${p.$flexBasis || "auto"}`};
  padding: ${(p) => p.$padding || "0 1rem"};
  flex-flow: column;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

export const Row = styled.div`
  flex: 0 0 auto;
  flex-flow: wrap;
  gap: 1rem 2rem;
  display: flex;
`;

export type ColProps = {
  $span?: number;
};

export const Col = styled.div<ColProps>`
  flex: 0 0 auto;
  width: ${(p) => (p.$span ? `calc(${p.$span * 100}% - ${((1 / p.$span - 1) / (1 / p.$span)) * 2}rem)` : "100%")};
  flex-flow: column;
  display: flex;
`;
