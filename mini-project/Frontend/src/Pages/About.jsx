import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          backgroundImage: 'url(https://source.unsplash.com/featured/?coffee)',
          "& h1":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
            color:"brown",
          },
          "& p":{
            textAlign:"justify",
            color:"black",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
          },
        }}>
          <Typography variant="h1">
            Welcome To Brew Star
          </Typography>
          <p>
            Welcome to Brew Star, where passion for coffee meets the artistry of craft. Nestled at the intersection of flavor and community,
          Brew Star is more than a coffee shop; it's a journey through the world of exceptional coffee experiences. 
          Our story unfolds in the careful selection of premium coffee beans sourced from diverse corners of the globe. 
          From the misty highlands of Ethiopia to the lush plantations of Colombia, each bean tells a tale of terroir and dedication.
          Founded on the belief that a cup of coffee should be more than a routine, Brew Star is a celebration of craftsmanship 
          and camaraderie.   Our skilled baristas are artisans, meticulously brewing each cup to perfection. Whether you crave the bold 
          intensity of a dark roast or the nuanced subtleties of a single-origin pour-over, our menu is a symphony of flavors 
          waiting to be explored.Beyond the beans, Brew Star is a community hub—a place where connections are forged over shared love
          for finely brewed coffee.</p>
          <br></br>
          <p>
            Our cozy ambiance invites you to linger, to work, to converse, or simply to savor a moment of respite. 
          Every visit is an opportunity to discover something new, from our seasonal blends to exclusive brewing techniques.
          At Brew Star, sustainability is not just a buzzword; it's a commitment. We strive to minimize our environmental footprint, 
          from ethically sourced beans to eco-friendly packaging. We believe in giving back to the communities that nurture our coffee origins,
          ensuring a positive impact at every step of the supply chain.Join us in the pursuit of exceptional coffee. Brew Star is more than 
          a destination; it's an experience—an ode to the rich tapestry of coffee culture. We invite you to savor the moment, one cup at a time, and be part of the Brew Star story.
          </p>

        </Box>
    </Layout>
  );
};

export default About