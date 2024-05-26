// atoms/TableHeader.jsx
import styled from "styled-components";

const TableHeaderStyled = styled.th`
  border: 1px solid #ddd;
  padding: 4px;
  font-size: 16px;
  color: white;
  background-color: #105AA3;
  font-weight: bold;
`;

function TableHeader({ children }) {
    return <TableHeaderStyled>{children}</TableHeaderStyled>;
}

export default TableHeader;
