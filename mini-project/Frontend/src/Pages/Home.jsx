import React from 'react'
import Layout from '../Components/Layout/Layout'
import Home_Background from '../Components/Images/03.jpg'
import '../styles/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style= {{backgroundImage:`url(${Home_Background})`}}>
        <div className='headerContainer'>
          <h1>WELCOME TO BREW STAR </h1>
          <p>"Welcome to BREW STAR, where every cup tells a story and every sip is a journey. Step into a world of aromatic bliss and rich flavors as you explore our carefully crafted selection of premium coffees. 
            From the first pour to the last drop, we are dedicated to delivering an exceptional coffee experience.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home