import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>Search - Active Online Software Page1</title>
        <meta
          property="og:title"
          content="Search - Active Online Software Page1"
        />
      </Helmet>
      <Menu rootClassName="menu-root-class-name"></Menu>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <header className="search-header">
        <h1 className="search-text">
          <span>
            Cytokines &amp; Receptors
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Database</span>
        </h1>
        <p className="search-text4">
          <span>
            To Compile A Database Of All The Cytokines And Receptors Related To
            Viral Infectious Illnesses And Cancer.
          </span>
          <br></br>
          <span>
            Additionally, To Do An Analysis Of The Data, Come To Some
            Conclusions, And Identify Any Connections Between The Various Viral
            Infections And Cancer.
          </span>
        </p>
      </header>
    </div>
  )
}

export default Search
