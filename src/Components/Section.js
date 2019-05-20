import React from "react";
import glamorous from 'glamorous'
import logo from "../img/shokilogo2.jpg";
import Background from "../img/Garage concrete texture-1.jpg"
import About from "../Components/aboutme";
import Contact from "../Components/contact";
import ContactMe from "../Components/contactme"
import InnerLinks from "./deconstruction/innerlinks";


const WelcomeScreen = glamorous.div({
  textAlign: "center",
  paddingTop: "40vh",
  verticalAlign: "middle",
  // backgroundColor: 'green',
  // height: '90vh'
})

const Intro = glamorous.div({
  fontSize: "22px",
  // fontStyle: "italic",
  // paddingTop: "500px",
  // marginTop: "-100px",
  // lineHeight: "22px",
  marginBottom: "25px",
})
const Name = glamorous.div({
  fontSize: "50px",
  fontWeight: "bold",
  // fontStyle: "italic",
  lineHeight: "22px",
  marginBottom: "25px",
})
const Profession = glamorous.p({
  fontSize: '20px',
  marginTop: 10,
  // color: '#CC3A4B',
})


export default function Section({ title, subtitle, dark, id, intro, name, profession, section }) {
  return (
    <div className={"section" + (dark ? " section-first" : "")} style={{ backgroundImage: 'url(' + Background + ')', width: ""}}>
      <div className="section-content" id={id} style={{backgroundColor: '', width: '80vw'}}>
        <h1>{title}</h1>
        {/* <p>{subtitle}</p> */}
        {section === "home" ? 
        <WelcomeScreen>
        <Intro>{intro}</Intro>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
        </WelcomeScreen>
        :
        ""
        } 
        
        <div>
          {section === "aboutme" ? <InnerLinks /> : section === "contact" ? <ContactMe/> : ""}  
        </div>  

        {
          section === "innerLinks" ?
          <InnerLinks />
          :
          ""
        }

      </div>
    </div>
  );
}
