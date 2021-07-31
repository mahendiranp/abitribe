import React, {Fragment, useState, Component } from 'react';
import 'boxicons';
import Logo from "./../images//pp.jpeg"
import { Link } from "react-scroll";
import Footer from "./Footer"
export default class Header extends Component {
   

    scrollLink = (page, pagename, icon) => {
    return (
      <Link
        activeClass="active" // class applied when element is reached
        to={page} // which page to scroll to (the first parameter)
        spy={true} // make Link selected when scroll is at its targets position
        smooth={true} // define scrolling behavior
        duration={500} //control scrolling speed 1000 = 1s
        onSetActive={this.handleSetActive}
      >
        {/*the page the link (the second parameter)*/}
        <box-icon name={icon} type='solid' color="#fff"></box-icon><strong> {pagename} </strong>
      </Link>
    );
  };

  render() {
  const NavBar = () => 
<header id="header" >
    <div className="d-flex flex-column">

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
          <li>{this.scrollLink("intro", "Home",  "component")}</li>
          <li>{this.scrollLink("about", "About", "info-circle")}</li>
          <li>{this.scrollLink("gallery", "GALLERY", "yin-yang")}</li>
          <li>{this.scrollLink("psychology", "TALK BUSINESS WITH US ", "group")}</li>
          <li>{this.scrollLink("contact", "BE A PART OF ABITRIBE ", "id-card")}</li>

        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
    </div>
    <Footer />
  </header>;


    return (
        <Fragment>
         <NavBar  />
        </Fragment>
    );
}
}
