import React from "react";
import "./ClearButton.css";

const ClearButton = props => (
  <div style={{width:'100px',height:'50px',border:'2px solid red','font-size': 'xx-large'}} onClick = {props.handleClear}>{props.children}</div>
);

export default ClearButton;