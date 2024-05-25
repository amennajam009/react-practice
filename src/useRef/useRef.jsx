import React , {useRef} from 'react';
import './useRef.css';
import UseRefChildComponent from './child-component/child-component';
function UseRef() {
    // useRef Hook
  let inputRef = useRef(null)

  function clickMeFn(){
    inputRef.current.value='1000'
    inputRef.current.style.color='red'
    inputRef.current.focus()
  }
//    useRef Hook

   //forwardRef 
   let inputValue = useRef(null)

   function forwardFnInChild(){
    inputValue.current.value = 'Function Works from Child Component'
   }
   //forwardRef 

   //Example 2 
   let useRef2 = useRef(null)
   
   function useRef2Fn(){
    useRef2.current.value = 'Child To Parent'
    useRef2.current.focus()
   }
  return (
<>
{/* useRef Hook */}
 <div className='useRef_div'>
    <h1>useRef Hook</h1>
   <input type="text" className='mt-3' ref={inputRef}  />
   <button className='btn btn-success mt-5' onClick={clickMeFn}>click me</button>
 </div>
{/* useRef Hook */}

{/* forwardRef  */}
<div className='forwardRef_div'>
<h1>forwardRef</h1>
<div className='card_body'>
  <h2>Example 1</h2>
<input type="text" ref={inputValue}  name="" id="" />
<UseRefChildComponent fnSendToChild={forwardFnInChild} />

{/* Example 2 */}
{/* <h2 className='mt-5'>Example 2</h2>
<UseRefChildComponent ref={useRef2} />
<button className='btn btn-success' onClick={useRef2Fn}>Click Me</button> */}
{/*  Example 2 */}
</div>
</div>


</>
  )
}

export default UseRef;
