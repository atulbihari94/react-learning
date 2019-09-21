import React, { Component } from 'react';
const list = ['a', 'b', 'c'];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'image-flag': 'https://www.countryflags.io/be/flat/64.png',
            'value':''
        };
    }
    onChange(event) {
        this.setState({ value: event.target.value })
    }
    printFlag = () => {
        this.setState({
            'image-flag': `https://www.countryflags.io/${this.state["value"] || 'in'}/flat/64.png`,

        })
    }
    render() {
        const divStyle={};
        divStyle.width ='400px';
        divStyle.height ='400px';
        divStyle.border="1px solid white"
        const imgStyle={
            width:'100%',
            height:'100%'
        }
        return (
            <div style={divStyle}>
                <p>
                    gr,gs,gu,gw,lk,ma,md,in
                </p>
                <input 
                    type="text"
                    value={this.state.value}
                    placeholder={'enter flag kkeyword'}
                    onChange={event => this.onChange(event)} />
                <button onClick={this.printFlag}>ok</button>
                <br />
                <img 
                    style={imgStyle} 
                    src={this.state["image-flag"]}
                    alt='noimage' />
            </div>
        );
    }
}


// const Toggle = ({ toggle, onToggleList }) => (
//   <button type="button" onClick={onToggleList}>
//     {toggle ? 'Hide' : 'Show'}
//   </button>
// );
// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <Item key={item} item={item} />
//     ))}
//   </ul>
// );
// const Item = ({ item }) => <li>{item}</li>;
export default App;
