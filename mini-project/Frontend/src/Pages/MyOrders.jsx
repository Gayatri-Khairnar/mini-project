import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#4E342E',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#EFEBE9',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)({
  overflowX: 'auto',
  maxWidth: '100%',
});

export default function MyOrders() {
  const [rows, setRows] = useState([]);
  const [totalBilling, setTotalBilling] = useState(0);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');

    if (!userId) {
      console.error('User not logged in');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/myOrders', { user_id: userId });
        console.log(response.data);
        setRows(response.data);

        const totalAmount = response.data.reduce((total, order) => total + order.price, 0);
        setTotalBilling(totalAmount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell>Coffee Name</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.coffeeName}>
                <StyledTableCell>{row.user_name}</StyledTableCell>
                <StyledTableCell>{row.coffeName}</StyledTableCell>
                <StyledTableCell>{row.description}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCell colSpan={3} align="right">
                Total Price
              </StyledTableCell>
              <StyledTableCell>{totalBilling}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Layout>
  );
}
