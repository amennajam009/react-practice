import React , {createContext, useState} from 'react'
export const GloballyDataProvider = createContext()
function practice_context_api() {
    const [itemId , setItemId] = useState()
  return (
<>
<GloballyDataProvider.Provider value={{itemId , setItemId}}>
 
</GloballyDataProvider.Provider>
</>
  )
}

export default practice_context_api;
