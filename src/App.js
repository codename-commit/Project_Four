import React, { Component } from "react";
import logo from "./img/rmlogodark.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import {Header} from "../src/Components/header"
import { StickyContainer, Sticky } from 'react-sticky';
import glamorous from 'glamorous'
import { Link, animateScroll as scroll } from "react-scroll";

const Logo = glamorous.div({
  // backgroundColor: 'red',
  position: 'fixed',
  marginTop: '-50px',

  // max-width: 900px;
  padding: "0rem 3rem",
  // margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  // alignItems: "center",
  // height: "100%",
  // width: "50%"
})

let renderCount = 0;
class App extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <h2>Content before the Sticky...</h2> */}
        <Logo>
        <img
            src={logo}
            className="nav-logo-main"
            alt="Logo"
            onClick={this.scrollToTop}
            
          />
        </Logo>
        <Section
          title=""
          subtitle={""}
          // first={"first"}
          dark={true}
          id="section1"
          intro={"Hi, I'm"}
          name={"RESHOKETJOE MADILENG"}
          profession={""}
          content={<Sticky/>}
          section={"home"}
        />
        <div
          className="gap short"
          style={{ background: "linear-gradient(#fff, #ddd)" }}
        />
        <StickyContainer className="container">
          <Sticky>
            {({ style }) => (
              <Header style={style} renderCount={renderCount++} />
              // <Navbar />
            )}
          </Sticky>

          {/* <h2 className="text-center">{"<StickyContainer />"}</h2> */}
          {/* <p>Hello World</p> */}
          
        <StickyContainer>
          {/* <Sticky>{({ style }) => <h1 style={style}>Sticky element</h1>}</Sticky> */}
        </StickyContainer>
        <Section
          title=""
          // subtitle={dummyText}
          dark={false}
          id="section2"
          section={"aboutme"}
        />
        <Section
          // title="Section 3"
          // subtitle={dummyText}
          dark={true}
          id="section3"
          section={"contact"}
        />
        <Section
          title="LOADING ..."
          subtitle='footer loading ...'
          dark={false}
          id="section4"
          section={"footer"}
        />
        {/* <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
          
        />     */}
        </StickyContainer>
        <div
          className="gap tall"
          style={{ background: "linear-gradient(#ddd, #fff)" }}
        >
          {/* <h2>Content after the Sticky... </h2> */}
      </div>    
        
      </div>
    );
  }
}

export default App;
