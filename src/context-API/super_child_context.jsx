import React , {useContext} from 'react'
import { GlobalInfo } from './context_Api';
function Super_child_context() {
    const {useRedColor} = useContext(GlobalInfo)

  return (
 <>
 <h3 style={{color:useRedColor}}>Super Child Works</h3>
 </>
  )
}

export default Super_child_context;
