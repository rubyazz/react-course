import React from 'react';

class ClassCounter extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
		this.increase = this.increase.bind(this)
		this.decrease = this.decrease.bind(this)
	}

	increase(){
		this.setState({count: this.state.count + 1})
  	} 
  	decrease(){
  		this.setState({count: this.state.count - 1})
  	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increase} >increase</button>
	      		<button onClick={this.decrease} >decrease</button>
			</div>
		)
	}
}
export default ClassCounter;