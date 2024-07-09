import React,{useState} from 'react'
import { Drawer,IconButton,AppBar,Box, Toolbar, Typography, Divider} from '@mui/material'
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuIcon from "@mui/icons-material/Menu";
import Coffee1 from '../Images/coffee_logo1.png'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }
  return (
    <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor:"black"}}>
                <Toolbar>
                  <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm:"none"},}} onClick={handleDrawerToggle} >
                    <MenuIcon />

                  </IconButton>
                <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexgrow:1}} >
                <img id='img' src={Coffee1} alt=''/>
                    Brew Star
                </Typography>
                <Box sx={{display:{xs:'none', sm:"block"}}}>
                  <ul className='navigation-menu'>
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <Link to={'/order'}>Order</Link>
                    </li>
                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li className='registration'>
                      <Link to={'/Registration'}>Registration</Link>
                    </li>
                    <li className='login'>
                      <Link to={'/Login'}>Login</Link>
                    </li>
                    <li className='myorders'>
                      <Link to={'/myorders'}>MyOrders</Link>
                    </li>
                  </ul>
                  
                </Box>
                
                </Toolbar>
            </AppBar>
            <Box  >
             <Toolbar />

            </Box>
        </Box>
    </>
  )
}

export default Header