import React ,{useState} from 'react'

const Counter = (WrappedComponent) =>{
    function Hoc() {
        const [count , setCount] = useState(0)
        function increaseNumber(){
            setCount(count + 1)
        }  
        return (
          <div>
            <WrappedComponent count={count} increment={increaseNumber}/>
          </div>
        )
      }
      return Hoc;
}



export default Counter;
