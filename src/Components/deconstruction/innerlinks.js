import React, { Component } from "react";
import AboutMe from "../aboutme";
import Portfolios from "../portfolios"
import glamorous from "glamorous";
import "./navstyle.css"
import PDFView from "../pdfview";

const MainContainer = glamorous.div({
    width: "100%",
    backgroundColor: "",
    marginTop: "-50px",
    // textAlign: "center",
        // position: "absolute",
        // left:" 50%",
        // top:" 50%",
        // transform: translate(-50%, -50%);
    
    // marginLeft: "-3vw"
})

const InnerContainer = glamorous.div({
    width: "100%",
    backgroundColor: "",
    marginTop: "-50px",
    fontFamily: "Lucida Console"
    // textAlign: "center",
        // position: "absolute",
        // left:" 50%",
        // top:" 50%",
        // transform: translate(-50%, -50%);
    
    // marginLeft: "-3vw"
})

const TabButtonContainer = glamorous.div({
 backgroundColor: "",
//  position: "float",
//  marginRight: "-2vw",
width: "82vw",
textAlign: "right",
})

const TabButton = glamorous.button({
    // marginTop: "-40px",
    // paddingLeft: "-1000px",
    fontWeight: "",
    backgroundColor: "inherit",
    // float: "right",
    border: "none",
    outline: "none",
    cursor: "pointer",
    padding: "14px 16px",
    transition: "0.3s",
    fontSize: "15px",
})   


class InnerLinks extends Component {
 
    constructor() {
        super();

        this.state = {
            btnActive: "aboutme"
          };
        this.setActiveButton = this.setActiveButton.bind(this)  
    }
 
    setActiveButton = (e) => {
        console.log(e.target.id)
        this.setState({
            btnActive: e.target.id
        });
    } 

  render() {
    return (
      <MainContainer >
         <TabButtonContainer class="Tab">
            <TabButton class="tablinks" className={this.state.btnActive === "aboutme" ? "BtnActive" : "BtnDisabled"} id="aboutme" onClick={this.setActiveButton}>ABOUT ME </TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "resume" ? "BtnActive" : "BtnDisabled"} id="resume" onClick={this.setActiveButton}>RESUME</TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "portfolios" ? "BtnActive" : "BtnDisabled"} id="portfolios" onClick={this.setActiveButton}>PROJECTS</TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "blog" ? "BtnActive" : "BtnDisabled"} id="blog" onClick={this.setActiveButton}>BLOG</TabButton>
         </TabButtonContainer>
            <br />
             {/* {this.state.btnActive}    */}

            <InnerContainer style={{backgroundColor:'', textAlign: '', justifyContent: "center", display: "flex"}}>
             { this.state.btnActive === "aboutme" ? 
                <div id="aboutme" class="tabcontent">
                    <br />
                    <AboutMe />
                </div>

            : this.state.btnActive === "resume" ?
                <div id="resume" class="tabcontent">
                    <br />
                <PDFView />
                </div>

            : this.state.btnActive === "portfolios" ?
                <div id="portfolios" class="tabcontent">
                    <br />
                    <Portfolios />
                </div>

            : this.state.btnActive === "blog" ?
                <div id="blog" class="tabcontent">
                <h3>Blog</h3>
                <p>Blog Content</p>
                </div>
            : "" 
            }    
            </InnerContainer>
      </MainContainer>
    );
  }
}

export default InnerLinks;
