import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Centered from './centered'
import './menu.css'

const Menu = (props) => {
  return (
    <div className={`menu-menu ${props.rootClassName} `}>
      <div id="mobile-menu" className="menu-mobile-navigation">
        <img alt={props.Logo_alt} src={props.Logo_src} className="menu-logo" />
        <div className="menu-links">
          <span className="Link">{props.text}</span>
          <span className="Link">{props.text1}</span>
          <span className="Link">{props.text2}</span>
        </div>
        <div id="close-mobile-menu" className="menu-close-mobile-menu">
          <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
            <path
              d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="menu-desktop-navigation">
        <Centered
          rootClassName="centered-root-class-name"
          className=""
        ></Centered>
      </div>
      <div className="">
        <DangerousHTML
          html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          className=""
        ></DangerousHTML>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  Logo_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Logo_alt: 'pastedImage',
  text: 'Solutions',
  text1: 'How it works',
  text2: 'Prices',
  rootClassName: '',
}

Menu.propTypes = {
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Menu
