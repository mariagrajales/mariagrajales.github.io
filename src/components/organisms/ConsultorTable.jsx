// organisms/ConsultorTable.jsx
import React from 'react';
import TableRow from '../molecules/TableRow';
import styled from 'styled-components';
import TableHeader from '../atoms/TableHeader';

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody`
  overflow-y: auto;
`;

function ConsultorTable({ pila }) {
    const consultores = [];
    let currentNode = pila.top;
    while (currentNode) {
        consultores.push(currentNode.consultor);
        currentNode = currentNode.next;
    }

    return (
        <TableWrapper>
            <TableStyled>
                <TableHead>
                    <tr>
                        <TableHeader>Nombre</TableHeader>
                        <TableHeader>Apellido Paterno</TableHeader>
                        <TableHeader>Apellido Materno</TableHeader>
                        <TableHeader>Dirección</TableHeader>
                        <TableHeader>Teléfono</TableHeader>
                        <TableHeader>Código de Consultor</TableHeader>
                        <TableHeader>Fecha de Registro</TableHeader>
                    </tr>
                </TableHead>
                <TableBody>
                    {consultores.map((consultor, index) => (
                        <TableRow key={index} consultor={consultor} />
                    ))}
                </TableBody>
            </TableStyled>
        </TableWrapper>
    );
}

export default ConsultorTable;
