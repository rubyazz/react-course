import React, {useState} from 'react';

const Counter = function(){
	const [count, setCount] = useState(0)

	function increase(){
    	setCount(count + 1)
  	} 
  	function decrease(){
    	setCount(count - 1)
  	}


	return(
		<div>
			<h1>{count}</h1>
			<button onClick={increase} >increase</button>
      		<button onClick={decrease} >decrease</button>
		</div>
	)
}

export default Counter;