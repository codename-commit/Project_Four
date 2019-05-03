import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "../App.css";

import glamorous from "glamorous"

const Label = glamorous.label({
  // position: 'relative',
  // margin: 'auto',
  // width: '100%',
  // maxWidth: '280px',
  // position: 'absolute',
  // top: '16px',
  // left: 0,
  // fontSize: '16px',
  // color: '#9098A9',
  // fontWeight: '500',
  // transformOrigin: '0 0',
  // transition: 'all .2s ease',
})

const Input = glamorous.input({
  // :hover
  //     background: rgba(#223254,.03)
  //   &:not(:placeholder-shown)
  //     + span
  //       color #5A667F
  //       transform: translateY(-26px) scale(.75)
  //   &:focus
  //     background: none
  //     outline: none
  //     + span
  //       color #0077FF
  //       transform: translateY(-26px) scale(.75)
  //       + .border
  //           transform: scaleX(1)
})
const Button = glamorous.a({
  textAlign:'center',
	border: '1px solid #ffffff',
	width: '11em',
	padding: '0.7em 0',
	textDecoration: 'none',
	borderRadius: 4,
	display: 'inline-block',
	margin: '.5em 1em',
	transition: 'all .3s',
}, ({primary}) => (
    {
		backgroundColor: primary ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
		color: primary ? '#fff' : '#DA233C',
		':hover': {
			backgroundColor: primary ? 'rgba(255, 255, 255, 0.5)' : '#CC3A4B',
			color: primary ? '#DA233C' : '#fff',
    }
}))

class Contact extends Component {
  render() {
    return(
      <div>
      <h1 style={{fontWeight:"bold", textAlign:'center'}}>Contact Me</h1>
      <div className="contact-body">
        <form name="sentMessage" id="contactForm" novalidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <Label>Name</Label>
                <Input className="form-input" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <Label>Email Address</Label>
                <Input className="form-input" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <Label>Phone Number</Label>
                <Input className="form-input" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <Label>Message</Label>
                <textarea className="form-input" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br/>
            <div id="success"></div>
            <div className="form-group">
              <Button type="submit" className="">Send</Button>
            </div>
          </form>
      </div>
      </div>
    )
  }
}

export default Contact;
