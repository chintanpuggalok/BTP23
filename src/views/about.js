import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Active Online Software Page1</title>
        <meta
          property="og:title"
          content="About - Active Online Software Page1"
        />
      </Helmet>
      <Menu rootClassName="menu-root-class-name3"></Menu>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default About
