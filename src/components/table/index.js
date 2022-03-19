import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';





export default function TableData(props) {
  const dataUser = props.data
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='tableData'>
        <TableHead className="tableData__head">
          <TableRow>
            <TableCell>
              
                Username</TableCell>
            <TableCell > 
            <IconButton onClick={() => props.handleSort('name')}>
            <FilterListIcon fontSize="small"/>
                </IconButton>
               Name</TableCell>
            <TableCell >
              <IconButton onClick={() => props.handleSort('email')}>
                <FilterListIcon fontSize="small"/>
              </IconButton>Email</TableCell>
            <TableCell >
            <IconButton onClick={() => props.handleSort('gender')}>
              <FilterListIcon fontSize="small"/>
            </IconButton>
              Gender</TableCell>
            <TableCell >
              <IconButton onClick={() => props.handleSort('registeredDate')}>
                <FilterListIcon fontSize="small"/>
              </IconButton>
              Registered Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUser.map((row) => (
            <TableRow
              key={row.login.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.login.username}
              </TableCell>
              <TableCell>{row.name.first + " " + row.name.last}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.registered.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
