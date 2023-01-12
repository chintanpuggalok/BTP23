import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text: '© 2022 Netaji Subhas University of Technology, All Rights Reserved.',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
