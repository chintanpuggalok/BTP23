import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import Menu from '../components/menu'
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
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Menu rootClassName="menu-root-class-name1"></Menu>
    </div>
  )
}

export default Database
