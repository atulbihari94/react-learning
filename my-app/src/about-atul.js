import React from 'react'
class Atul extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            name: 'Atul Kumar',
            age:24,
            phone:93434343434 ,
            sex: this.props.sex,
        
        };
        // this.handleClick = this.handleClick.bind(this);
      }
    render() {
        return <div>
            <p>name={this.state.name}</p>
            <p>age={this.state.age}</p>
            <p>mobile={this.state.phone}</p>
            <p>sex={this.props.sex}</p>
            </div>
    }        
}

export default Atul;