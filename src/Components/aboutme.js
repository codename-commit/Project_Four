import React, { Component } from 'react';
import ProfilePicture from '../img/image2.jpg';
import glamorous from 'glamorous';
import { Grid, Cell } from 'react-mdl';
import SvgLines from 'react-mt-svg-lines';
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
 fontSize: "1.5vw"
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
            <a style={{color:"white"}}>.</a>
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
                {/* <td><A style={{fontWeight:"bold"}} > linkedin </A></td> */}
                {/* <td>: MaShokisi </td> */}
              </tr>
            </table>


            <div class="" style={{listStyleType: "none", margin: 0, padding: 0,  backgroundColor:"", justifyContent: "left"}}>
                  <ul class="list-unstyled" style={{listStyleType: "none", padding: 0, display: "flex", backgroundColor:"", marginLeft: ''}}>
                    <li><a href="https://www.facebook.com/thaboJamesMaboya">
                        <svg width="30" height="30" viewBox="0 0 32 32" fill="606060" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>  
                        </svg>  
                    </a></li> 
                    <li><a href="https://www.instagram.com/that_tall_sir/">
                        <svg width="48" height="30" viewBox="0 0 32 32" fill="585858" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                          <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                          <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                        </svg>
                    </a></li> 
                    <li><a href="https://wa.me/+27723598245">
                        <svg width="48" height="30" viewBox="0 0 32 32" fill="585858" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                        </svg>
                    </a></li> 
                    <li><a href="https://www.linkedin.com/in/thabo-james-maboya">
                        <svg width="48" height="30" viewBox="0 0 32 32" fill="585858" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                          <path d="M2 12h6v18h-6v-18z"></path>
                          <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                        </svg>
                    </a></li>
                  </ul>
              </div>

               {/* <A style={{fontWeight:"bold"}} > Phone: </A> +27 (xxx) xxx-xxxx <br/> <A style={{fontWeight:"bold"}} > Mail: </A> xxxxxx@gmail.com <br/> <A style={{fontWeight:"bold"}} > linkedin: </A> MaShokisi  */}</Body>
            {/* <Button style={{marginLeft:'0px', marginTop:'10px'}}>SEND A MESSAGE</Button> */}
          </div>
        </Cell>
      </div>
    )
  }
}

export default About;
