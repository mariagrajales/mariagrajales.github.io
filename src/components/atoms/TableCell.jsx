// atoms/TableCell.jsx
import styled from "styled-components";

const TableCellStyled = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 16px;
`;

function TableCell({ children }) {
    return <TableCellStyled>{children}</TableCellStyled>;
}

export default TableCell;
