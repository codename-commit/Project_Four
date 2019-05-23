import React, { Component } from 'react';
import PDFViewer from "mgr-pdf-viewer-react";
import CustomNavigation, {
  CustomPrevButton,
  CustomNextButton,
  CustomPages
} from "./Navigation";

const exampleWrapperStyle = {
  width: "100%",
  boxShadow: "0 8px 6px -6px black",
  borderStyle: "groove"
};
 
class PDFViewContentTwo extends Component {
  
  render() {
 
    return (
      <div style={{ width: "", justifyContent: "center"}}>
        <div style={exampleWrapperStyle}>
          <PDFViewer
            document={{
              url: "https://arxiv.org/pdf/quant-ph/0410100.pdf"
            }}
            hideNavbar
            css="customViewer"
            navigation={CustomNavigation}
          />
        </div>
      </div>
    );
  }
}

export default PDFViewContentTwo;