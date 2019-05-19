import React, { Component } from "react";
import AboutMe from "../aboutme";
import glamorous from "glamorous";
import "./navstyle.css"

const MainContainer = glamorous.div({
    width: "100%",
    backgroundColor: "purple",
    marginTop: "-50px",
    textAlign: "center"
    // marginLeft: "-3vw"
})

const TabButtonContainer = glamorous.div({
 backgroundColor: "orange",
//  position: "float",
//  marginRight: "-2vw",
width: "82vw",
textAlign: "right",
})

const TabButton = glamorous.button({
    // marginTop: "-40px",
    // paddingLeft: "-1000px",
    fontWeight: "bold",
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
      <MainContainer>
         <TabButtonContainer class="Tab">
            <TabButton class="tablinks" className={this.state.btnActive === "aboutme" ? "BtnActive" : "BtnDisabled"} id="aboutme" onClick={this.setActiveButton}>ABOUT ME </TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "resume" ? "BtnActive" : "BtnDisabled"} id="resume" onClick={this.setActiveButton}>RESUME</TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "portfolios" ? "BtnActive" : "BtnDisabled"} id="portfolios" onClick={this.setActiveButton}>PROJECTS</TabButton>
            <TabButton class="tablinks" className={this.state.btnActive === "blog" ? "BtnActive" : "BtnDisabled"} id="blog" onClick={this.setActiveButton}>BLOG</TabButton>
         </TabButtonContainer>
            <br />
             {/* {this.state.btnActive}    */}

             { this.state.btnActive === "aboutme" ? 
                <div id="aboutme" class="tabcontent">
                    <br />
                    <AboutMe />
                </div>

            : this.state.btnActive === "resume" ?
                <div id="resume" class="tabcontent">
                <h3>Resume</h3>
                <p>Resume Content</p> 
                </div>

            : this.state.btnActive === "portfolios" ?
                <div id="portfolios" class="tabcontent">
                <h3>Portfolios</h3>
                <p>Portfolios Content</p>
                </div>

            : this.state.btnActive === "blog" ?
                <div id="blog" class="tabcontent">
                <h3>Blog</h3>
                <p>Blog Content</p>
                </div>
            : "" 
            }    
        
      </MainContainer>
    );
  }
}

export default InnerLinks;
