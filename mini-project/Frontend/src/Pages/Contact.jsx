import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10, ml:3.5,"$ h4":{fontWeight:"bold", mb:2}
      }}>
        <Typography variant="h4">Get in Touch with Us</Typography>
        <p>
        Welcome to our Contact page! We're delighted that you want to reach out to us. Whether you have a question, a suggestion, or you just want to say hello, 
        <br></br>we're here to listen. Please feel free to contact us through any of the channels below, and we'll get back to you as soon as possible.
        </p>
        </Box>
        <Box sx= {{m:3, width:"600px", ml:'10', "@media (max-width:600px)":{width:"300px"} }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white', }} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt:1}}/>1800-00-0000 (tollfree)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <MailIcon sx={{color:"skyblue", pt:1}}/>admin@mycoffee.com
                </TableCell>
                </TableRow>
                 <TableRow>
                <TableCell>
                  <PhoneIcon sx={{color:"green", pt:1}}/>1234567890
                </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact