import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './database.css'

const Database = (props) => {
  return (
    <div className="database-container">
      <Helmet>
        <title>Database - Active Online Software Page1</title>
        <meta
          property="og:title"
          content="Database - Active Online Software Page1"
        />
      </Helmet>
      <Menu rootClassName="menu-root-class-name1"></Menu>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Database
