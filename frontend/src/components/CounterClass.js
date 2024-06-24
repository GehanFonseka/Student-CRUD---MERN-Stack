import React from "react";

class CounterClass extends React.Component{
      constructor(){
        super();
        this.increment = this.increment.bind(this)
        //state means javascript object
        this.state = { 
             number: 0
        }
      }
//making increment funtion for increment button
      increment(){
        this.setState({
          number: this.state.number + 1
        })

      }
//make sure if we make funtions we have to bind in classes(line 6)

      render(){
        return(
            <div>
              <h3>class Component</h3>
              <h1>Counter =  {this.state.number}</h1>
              <button onClick={this.increment}>Increment</button>
              <hr></hr>


            </div>
        )
      }
}

export default CounterClass;