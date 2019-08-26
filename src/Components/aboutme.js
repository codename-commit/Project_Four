import React, { Component } from 'react';
import ProfilePicture from '../img/image2.jpg';
import glamorous from 'glamorous';
import { Grid, Cell } from 'react-mdl';
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


class About extends Component {
  render() {
    return(
      <div style={{marginLeft:'', backgroundColor:'', width: '60vw', padding:'', position:'', left: ''}}>

        {/* <h1 style={{fontWeight:"bold", textAlign:'center'}} >About Me</h1> */}
      
        <Cell col={12} id='contentWrapper' style={{display:'flex',flex:1, backgroundColor:'', width:'', margin:'center'}}>
          <IMG
              style={{width:'21vw',height: '100%', marginRight:'0px', borderRadius: "1%"}}
              src={ProfilePicture}
              alt="avatar"
              className="avatar-img"
              />
          <div></div>
          <div id='actualContent' style={{backgroundColor:'', marginLeft: '20px', marginTop:'10px', width:'38vw', padding: '9px 4px' }}>
            <Title style={{fontWeight:"bold"}}>Greeting, I'm Shoki Madileng.</Title>
            <Body>
            I'm a young developer based in Bellevue, Johannesburg and at the moment I focus my work on Web Applications, but anyway I'm a curious person and I love to build creatives' ideas into a reality. <br/>
            
            </Body>
            <Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.</Body> 
            <br/>
            <Body>

            <table>
              <tr>
                <td><A style={{fontWeight:"bold"}} > Phone </A></td>
                <td>: +27 (xxx) xxx-xxxx</td>
              </tr>
              <tr>
                <td><A style={{fontWeight:"bold"}} > Mail </A></td>
                <td>: xxxxxx@gmail.com</td>
              </tr>
              <tr>
                <td><A style={{fontWeight:"bold"}} > linkedin </A></td>
                <td>: MaShokisi </td>
              </tr>
            </table>



               {/* <A style={{fontWeight:"bold"}} > Phone: </A> +27 (xxx) xxx-xxxx <br/> <A style={{fontWeight:"bold"}} > Mail: </A> xxxxxx@gmail.com <br/> <A style={{fontWeight:"bold"}} > linkedin: </A> MaShokisi  */}</Body>
            {/* <Button style={{marginLeft:'0px', marginTop:'10px'}}>SEND A MESSAGE</Button> */}
          </div>
        </Cell>
      </div>
    )
  }
}

export default About;
