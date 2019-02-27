import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className = "header">
    <div className = "headerMenu">
    </div>
    <div className = "serchContainer">
      <div className = "serchTag">
        <a id = "aSerchTag">Buscar</a>
        <div className = "serchImg"></div>
      </div>
    </div>
    <div className = "userContainer">
      <a id = "aUser">Juan Paco Pedro</a>
    </div>
    <div className = "userImg"></div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
