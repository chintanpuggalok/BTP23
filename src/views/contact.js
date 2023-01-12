import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Active Online Software Page1</title>
        <meta
          property="og:title"
          content="Contact - Active Online Software Page1"
        />
      </Helmet>
      <Menu rootClassName="menu-root-class-name2"></Menu>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Contact
