import React , {useEffect, useState} from 'react'
import './crud.css'
import axios from 'axios'
function Crud() {
  const [userData , setData] = useState([])
   useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      console.log(res)
      setData(res.data)
    })
   },[])
  return (
             <>
             <div className='crud_component'>
              {/* GET API START */}
              <h1>Get Api</h1>
              {userData.map((dataResponse)=>{
               return(
                <p>{dataResponse.title}</p>
               ) 
              })}
              {/* GET API END */}


              
             </div>
           </>
  )
}

export default Crud

