import React, { useState , useMemo } from 'react'
import './useMemo.scss'
function UseMemo() {
    const [count , setCount] = useState(1)
    const [item , setItem] = useState(2)

    const useMemoFn = useMemo(function ItCanBeTheFunctionThatCanHangApp(){
        console.log('clicked meee')
    },[count])

  return (
<>
<div className='useMemo_Component'>
 <div className='userMemo_div'>
  <h1>useMemo Use Case</h1>
   <h2>Count:{count}</h2>
  <button className='btn btn-success' onClick={()=> setCount(count+1)}>Update Count</button>
  <h2>Item:{item}</h2>
  <h1>{useMemoFn}</h1>
  <button className='btn btn-success' onClick={()=> setItem(item*2)}>Update Count</button>
 </div>
</div>
</>
  )
}

export default UseMemo;
