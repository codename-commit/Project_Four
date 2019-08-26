import React, { Component } from 'react';
import ProfilePicture from '../img/image2.jpg';
import glamorous from 'glamorous';
import { Grid, Cell } from 'react-mdl';
import PortfoliosContent from "./portfolioscontent"
// import { Button } from 'reactstrap';

const IMG = glamorous.img({
 marginTop: '30px',
 height: '100%',
 width: '100%'
})
const A = glamorous.a({
  color:'black',
  // fontSize: "1vw"
})
const Button = glamorous.a({
  // textAlign:'center',
	// border: '1px solid #F67982',
	// width: '11em',
	// padding: '0.7em 0',
	// textDecoration: 'none',
	// borderRadius: 4,
	// display: 'inline-block',
	// margin: '.5em 1em',
  // transition: 'all .3s',
  
    backgroundColor: "White",
    // fontWeight: "bold",
    // border: 5px solid gray;
    borderStyle: "none none solid none",
    borderColor: "white",
    color: "black",
    padding: "4px 6px",
    // text-align: center;
    // text-decoration: none;
    // display: inline-block;
    fontSize: "1vw"

}, {':hover': {
  			backgroundColor: '#DCDCDC',
        // color: '#f1efd4',
        borderStyle: "none none solid none",
        borderColor: "#707070"
      }}
// , ({primary}) => (
//     {
// 		backgroundColor: primary ? '#000000' : 'rgba(255, 255, 255, 0.5)',
// 		color: primary ? '#fff' : '#DA233C',
// 		':hover': {
// 			backgroundColor: primary ? 'rgba(255, 255, 255, 0.5)' : '#CC3A4B',
// 			color: primary ? '#DA233C' : '#fff',
//     }
// })
)

const Title = glamorous.h1({
 fontSize: "1vw"
}) 
const Body = glamorous.p({
  fontSize: "1vw"
})



class Portfolios extends Component {
  render() {
    return(
      <div style={{marginLeft:'', backgroundColor:'red', width: '60vw', padding:'', position:'relative', left: '12%', justifyContent:'right'}}>

        {/* <h1 style={{fontWeight:"bold", textAlign:'center'}} >About Me</h1> */}
      
        <Cell col={12} id='contentWrapper' style={{display:'flex',flex:1, backgroundColor:'', width:'', margin:'center'}}>
          {/* <PortfoliosContent /> */}
        </Cell>
      </div>
    )
  }
}

export default Portfolios;
