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
  color:'black'
})
const Button = glamorous.a({
  textAlign:'center',
	border: '1px solid #F67982',
	width: '11em',
	padding: '0.7em 0',
	textDecoration: 'none',
	borderRadius: 4,
	display: 'inline-block',
	margin: '.5em 1em',
	transition: 'all .3s',
}, ({primary}) => (
    {
		backgroundColor: primary ? '#CC3A4B' : 'rgba(255, 255, 255, 0.5)',
		color: primary ? '#fff' : '#DA233C',
		':hover': {
			backgroundColor: primary ? 'rgba(255, 255, 255, 0.5)' : '#CC3A4B',
			color: primary ? '#DA233C' : '#fff',
    }
}))

const Title = glamorous.h1({
 fontSize: "19px"
}) 
const Body = glamorous.p({

})


class About extends Component {
  render() {
    return(
      <div style={{marginLeft:'-10vw', backgroundColor:'', width: '75vw'}}>

        {/* <h1 style={{fontWeight:"bold", textAlign:'center'}} >About Me</h1> */}
      
        <Cell col={12} id='contentWrapper' style={{display:'flex',flex:1, backgroundColor:'', width:'1100px', margin:'center'}}>
          <IMG
              style={{width:'442px',height: '100%', marginRight:'0px'}}
              src={ProfilePicture}
              alt="avatar"
              className="avatar-img"
              />
          <div></div>
          <div id='actualContent' style={{backgroundColor:'', marginLeft: '20px', marginTop:'10px', width:'650px' }}>
            <Title style={{fontWeight:"bold"}}>Greeting, I'm Shoki Madileng.</Title>
            <Body>
            I'm a young developer based in Bellevue, Johannesburg and at the moment I focus my work on Web Applications, but anyway I'm a curious person and I love to build creatives' ideas into a reality. <br/>
            <Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Body> 
            
            </Body>
            <Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Body> 
            <br/>
            <Body> <A style={{fontWeight:"bold"}} > Phone: </A> +27 (xxx) xxx-xxxx <br/> <A style={{fontWeight:"bold"}} > Mail: </A> xxxxxx@gmail.com  </Body>
            <Button style={{marginLeft:'0px', marginTop:'10px'}}>SEND A MESSAGE</Button>
          </div>
        </Cell>
      </div>
    )
  }
}

export default About;