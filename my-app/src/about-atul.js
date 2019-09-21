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
    //   changeName = () =>{
    //     return this.setState({name: 'Ram'});
    //   };
    render() {
        const {name,age,phone}=this.state;
        const {sex}=this.props;
        return <div>
            <p>name={name}</p>
            <p>age={age}</p>
            <p>mobile={this.state.phone}</p>
            <p>sex={sex}</p>
            </div>
    }        
}

export default Atul;