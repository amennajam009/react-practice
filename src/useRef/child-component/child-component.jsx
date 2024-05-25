import React , {forwardRef} from 'react'



function UseRefChildComponent(props , reference ) {

  return (
<>
{/* <input type="text" ref={reference} name="" id="" /> */}
<button className='btn btn-info' onClick={props.fnSendToChild}>Click me</button>
</>
  )
}

export default forwardRef(UseRefChildComponent);
