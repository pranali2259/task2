import { Component } from "react";
import React from 'react'

const counter = () => {
  return (
    <div>
      <Count/>
    </div>
  )
}

export default counter

class Count extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:this.state.count*0
        })
    }
render(){
    return (
        <div>
    <div>Count-{this.state.count}</div>
<button onClick={()=> this.increment()}>+</button>
<button onClick={()=>this.reset()}></button>
<button onClick={()=>this.decrement()}>-</button>
</div>

    )
}
}