import React  from 'react'
import Shop2 from './shop2'
import HOC from './hoc';
function Shop_Hoc(props) {
    const {count , incrementNumber} = props
  return (
<>
<div className='text-center mt-5'>
    <h1>{count}</h1>
<button className='btn btn-success' onClick={incrementNumber}>Click Me</button>
<Shop2/>
</div>
</>
  )
}

export default HOC(Shop_Hoc);
