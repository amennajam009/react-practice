import React , {useContext} from 'react'
import { GlobalInfo } from './context_Api'
import Super_child_context from './super_child_context' 
function Child_context_Api() {
    const {greenColor} = useContext(GlobalInfo)
  return (
<>
<h2 style={{color:greenColor}}>Child Context Api Works</h2>
<Super_child_context/>
</>
  )
}

export default Child_context_Api
