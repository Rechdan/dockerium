import styled from "styled-components";

import { Table as MaterialTable } from "@mui/material";

const Table = styled(MaterialTable)`
  & tr:last-child td {
    border: 0;
  }
`;

export default Table;
