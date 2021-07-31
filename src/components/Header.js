import React, {Fragment, Component } from 'react';
import { useMediaQuery } from 'react-responsive'

import 'boxicons';
import Logo from "./../images//pp.jpeg"
import { Link } from "react-scroll";
import Footer from "./Footer"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 990 })
  return isNotMobile ? children : null
}

 const handleMediaQueryChange = (matches) => {
    console.log(matches);
  }

export default class Header extends Component {
   constructor(props){
     super(props);
     this.state = {
       activeMobileView: false
     }
   }
    scrollLink = (page, pagename, icon) => {
    return (
      <Link
        activeClass="active"
        to={page} 
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={this.handleSetActive}
      >
        <box-icon name={icon} type='solid' color="#fff"></box-icon><strong> {pagename} </strong>
      </Link>
    );
  };

  handleMenu = (e) => {
    e.preventDefault();
    this.setState({
      activeMobileView: !this.state.activeMobileView
    })
  }

  render() {
  const NavBar = () => 
<header id="header" className={`navpanel ${this.state.activeMobileView ? 'mobile-nav-active' : null}`} >
  
    <div className="d-flex flex-column footer-pad-bottom">

      <div className="profile">
        <img src={Logo} alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">ABITRIBE</a></h1>
        <h4 className="text-light">Daughter branch of 
          <b>Antique Boutique</b> </h4>
        <h4 className="text-light">FIND US HERE:</h4>
        <div className="social-links mt-3 text-center">
          <a href="https://www.facebook.com/antiqueboutiquepushkar" className="facebook"><box-icon name='facebook' type='logo' color="#fff" ></box-icon></a>
          <a href="https://www.instagram.com/antique_boutique_" className="instagram"><box-icon name='instagram-alt' type='logo' color="#fff" ></box-icon></a>
          <a href="mailto: abitribe@gmail.com" className="google"><box-icon name='google' type='logo' color="#fff" ></box-icon></a>
          <a href="https://wa.me/message/3IYWQCAH5BYQB1" className="whatsapp"><box-icon name='whatsapp' type='logo' color="#fff" ></box-icon></a>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>{this.scrollLink("intro", "HOME",  "component")}</li>
          <li>{this.scrollLink("about", "ABOUT", "info-circle")}</li>
          <li>{this.scrollLink("testimonials", "THE SELECTIVES", "yin-yang")}</li>
          <li>{this.scrollLink("gallery", "GALLERY", "group")}</li>
          <li>{this.scrollLink("psychology", "TALK BUSINESS WITH US", "id-card")}</li>
          <li>{this.scrollLink("contact", "BE A PART OF ABITRIBE", "message-dots")}</li>

        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
    </div>
    <Footer />
  </header>;


    return (
        <Fragment>
         {Default ? <button onClick={this.handleMenu} type="button" class="mobile-nav-toggle d-xl-none">
         { !this.state.activeMobileView ? <box-icon name='menu' color="#149ddd" ></box-icon> : <box-icon name='x' color="#149ddd"></box-icon> }
         </button> : ""}
         <NavBar  />
        </Fragment>
    );
}
}
