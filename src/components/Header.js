import React, {Fragment} from 'react';
import 'boxicons';
import Logo from "./../images//pp.jpeg"
const Header = props => {
    return (
        <Fragment>
        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
        <header id="header">
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
          <li className="active"><a href="#front"><i className="bx bxs-component" ></i><span>Home</span></a></li>
          <li className=""><a href="#intro"><i className="bx bxs-info-circle" ></i><span><strong>  ABOUT</strong></span></a></li>
          <li className=""><a href="#testimonials"><i className="bx bxs-yin-yang" ></i><strong>  THE SELECTIVES</strong></a></li>
          <li className=""><a href="#screening"><i className="bx bx-group" ></i> <strong>  GALLERY</strong></a></li>
          <li className=""><a href="#psychology"><i className="bx bx-id-card" ></i><strong> TALK BUSINESS WITH US </strong></a></li>
          <li className=""><a href="#contact"><i className="bx bxs-message-alt-dots" ></i><strong> BE A PART OF ABITRIBE </strong> </a></li>

        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
    </div>
  </header></Fragment>
    );
};

export default Header;