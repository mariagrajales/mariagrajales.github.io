// molecules/TableRow.jsx
import TableCell from '../atoms/TableCell';

function TableRow({ consultor }) {
    return (
        <tr>
            <TableCell>{consultor.nombre}</TableCell>
            <TableCell>{consultor.apellidoPaterno}</TableCell>
            <TableCell>{consultor.apellidoMaterno}</TableCell>
            <TableCell>{consultor.direccion}</TableCell>
            <TableCell>{consultor.telefono}</TableCell>
            <TableCell>{consultor.codigoConsultor}</TableCell>
            <TableCell>{consultor.fechaRegistro}</TableCell>
        </tr>
    );
}

export default TableRow;
