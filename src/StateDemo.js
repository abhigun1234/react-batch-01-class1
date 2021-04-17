import React, { Component } from 'react';

class StateDemo extends Component {
    constructor() {
        super()
        this.state={
            name:'abhishek'
        }
    }
    setname(_name){
        this.setState({name:_name})
    }
    render() {
        return (
            <div>
            <h1>{this.state.name}</h1>
            <button  onClick={()=>this.setname('kajal')} >setData</button>
            </div>
        );
   
    }
}

export default StateDemo;