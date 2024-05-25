// import React, { useState } from 'react'
// import Component_2 from './component-2'
// import Counter from './hoc'
// export default function Component_1() {
//   return (
//     <><div className='text-center mt-5'>
//           <h1>{count}</h1>
//           <button className='btn btn-success' onClick={increaseNumber}>Click me</button>
//       </div>
//       <Component_2 />
//       </>
//   )
// }

import React from 'react'
import Counter from './hoc'
import Component_2 from './component-2'

function Component_1(props) {
    const {count , increment} = props
  return (
    <div>
    <><div className='text-center mt-5'>
           <h1>{count}</h1>
           <button className='btn btn-success' onClick={increment}>Click me</button>
       </div>
       <Component_2 />
       </>
    </div>
  )
}

export default Counter(Component_1) 
