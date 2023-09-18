import { forwardRef } from "react";

import styled from "styled-components";

import { Table as MaterialTable, TableContainer, TableProps } from "@mui/material";

const StyledTable = styled(MaterialTable)`
  & tr:last-child td {
    border: 0;
  }
`;

const Table = forwardRef<HTMLTableElement, TableProps>((props, forwardedRef) => (
  <TableContainer>
    <StyledTable ref={forwardedRef} {...props} />
  </TableContainer>
));

export default Table;
