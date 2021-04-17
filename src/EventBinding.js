import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(){
 
        super()
        this.state={name:'kamal'}
        this.setData().bind(this)
    }
    setData(){

        console.log(this)
        this.setState({name:'ravi'})
        
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.setData}>Click</button> */}
                {/* <button onClick={this.setData.bind(this)}>Click</button> */}
               
                {this.state.name}
            </div>
        );
    }
}

export default EventBinding;