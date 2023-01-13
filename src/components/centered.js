import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './centered.css'

const Centered = (props) => {
  return (
    <nav className={`centered-centered ${props.rootClassName} `}>
      <div className="centered-left">
        <Link to="/" className="centered-navlink">
          <img
            alt={props.Logo_alt}
            src={props.Logo_src}
            className="centered-logo"
          />
        </Link>
      </div>
      <div className="centered-links">
        <Link to="/about" className="centered-navlink1 Link">
          {props.text}
        </Link>
        <Link to="/search" className="centered-navlink2 Link">
          {props.text1}
        </Link>
        <Link to="/contact" className="centered-navlink3 Link">
          {props.text2}
        </Link>
      </div>
      <div className="centered-right">
        <Link to="/database" className="centered-navlink4">
          <div className="centered-get-started">
            <span className="centered-text">{props.text3}</span>
          </div>
        </Link>
        <div id="open-mobile-menu" className="centered-burger-menu">
          <img
            alt={props.Mobile_Menu_Button_alt}
            src={props.Mobile_Menu_Button_src}
            className="centered-mobile-menu-button"
          />
        </div>
      </div>
    </nav>
  )
}

Centered.defaultProps = {
  text2: 'CONTACT',
  text1: 'SEARCH',
  Logo_alt: 'pastedImage',
  Mobile_Menu_Button_src: '/playground_assets/pastedimage-yxbd.svg',
  Logo_src: '/playground_assets/logo-200h.png',
  text: 'ABOUT',
  text3: 'DATABASE',
  rootClassName: '',
  Mobile_Menu_Button_alt: 'pastedImage',
}

Centered.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  Logo_alt: PropTypes.string,
  Mobile_Menu_Button_src: PropTypes.string,
  Logo_src: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  Mobile_Menu_Button_alt: PropTypes.string,
}

export default Centered
