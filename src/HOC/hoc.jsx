import React ,{useState} from 'react'

const Counter = (WrappedComponent) =>{
    const [count , setCount] = useState(0)
    function increaseNumber(){
        setCount(count + 1)
    }  
    function Hoc() {
        return (
          <div>
            <WrappedComponent count={count} increment={increaseNumber}/>
          </div>
        )
      }
      return Hoc;
}



export default Counter;
