import React, { createContext, useState } from 'react'
import Child_context_Api from './child_context_Api';
export const GlobalInfo = createContext();
function Context_Api() {
  const [color , setColor] = useState('green')
  const [redColor , setRedColor] = useState('red')
  return (
<GlobalInfo.Provider value={{greenColor:color , useRedColor:redColor}}>
<>
<h1>Context Api Works</h1>
<Child_context_Api/>
</>
</GlobalInfo.Provider>
  )
}

export default Context_Api;
