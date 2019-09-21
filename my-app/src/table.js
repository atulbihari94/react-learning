import React from 'react'
class PrintTable extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
      }
    render() {
        return <p>Hi {this.props.number}</p>; 
    }        
}

export default PrintTable;