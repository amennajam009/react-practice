import React  , {useState}from 'react'
import HOC from './hoc'
function Shop2(props) {
    const {count , incrementNumber} = props
  return (
<>
<div className='text-center mt-5'>
    <h1>{count}</h1>
<button className='btn btn-success' onClick={incrementNumber}>Click Me</button>
</div>
</>
  )
}

export default HOC(Shop2)
