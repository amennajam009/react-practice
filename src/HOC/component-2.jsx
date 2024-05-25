
import React from 'react'
import Counter from './hoc';
function Component_2(props) {
    const {count,increment} = props
  return (
    <div>
        <div className='text-center mt-5'>
      <h1>{count}</h1>
       <button className='btn btn-success' onMouseOver={increment}>Hover me</button>
     </div>
    </div>
  )
}

export default Counter(Component_2);

