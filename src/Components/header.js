import React from "react";
import logo from "../img/rmlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

import glamorous from 'glamorous'

const Container = glamorous.div({
  marginTop: '-20px',
})
const Img = glamorous.img({
  // paddingLeft: "-5000px"
})

export class Header extends React.Component {
  static defaultProps = {
    className: ""
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    const { style, renderCount, className } = this.props;
    return (
      <Container className={"header " + className} style={style}>
        <p>
          <span className="pull-left">
            <nav className="nav" id="navbar">
        <div className="nav-content">
          <Img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SUMMARY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
          </span>
        </p>
      </Container>
    );
  }
}
