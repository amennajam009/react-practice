import React, { useState } from 'react'

const HOC = (WrappedComponent) =>{

    function Hoc_practice() {
        const [count , setCount] = useState(0)
        function incrementNumber(){
            setCount (count + 1)
        }
        return (
          <div>
            <WrappedComponent count={count} incrementNumber={incrementNumber} />
          </div>
        )
      }
 return Hoc_practice;
}

export default HOC;
