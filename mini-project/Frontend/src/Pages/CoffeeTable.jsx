import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#4E342E', // Coffee Brown
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

function createData(coffeeName, fat, carbs, BuyCoffee) {
  return { coffeeName, fat, carbs, BuyCoffee};
}

//const [rows, setRows] = useState([]);
// const rows = [
//   createData('Cappuccino', 159, 6.0, 24, 4.0),
//   createData('Americano', 237, 9.0, 37, 4.3),
//   createData('Black Coffee', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CoffeeTable() {

  const[rows,setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/index/getProducts');
        console.log(response.data);
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = async (row) => {
    try { 
      const userId = sessionStorage.getItem('userId');
  
      if (!userId) {
        console.error('User not logged in');
        return;
      }
  
      const response = await axios.post('http://localhost:3000/buyCoffee', { coffeeId: row.id, userId });
  
      console.log('POST request response:', response.data);     
      toast.success('Order placed successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
  
    } catch (error) {
      console.error('Error making POST request:', error);
      toast.error('Error placing the order. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <Layout>
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">ID</StyledTableCell>
                  <StyledTableCell align="right">Coffee Name</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Buy Coffee</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
                  <StyledTableRow key={row.coffeeName}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.coffeName}</StyledTableCell>
                    <StyledTableCell align="right">{row.description}</StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button variant="contained" color="primary" onClick={() => handleBuyClick(row)}>
                        Buy
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
    </Layout>
  );
}