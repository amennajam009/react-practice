import React, {useState} from 'react'
import Student_child from './student_child'
import './conditional.css'
function Conditional_rendering() {
  // useState for only if else
  const [LoggedIn , setLoggedData] = useState(false)
  // useState for if/else if /else
  const [LoggedInUser , setData] = useState('super-admin')
  // List Rendering using .map
  const userList = ['user-1' , 'user-2' , 'user-3' , 'user-4' , 'user-5','user-5']
  const result = userList.map(users => users)


  //student Info Array
  const Student_Info = [
    {
        name:'amen',
        age: '20',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Micheal',
        age: '28',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Freaklin',
        age: '29',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Trevior',
        age: '30',
        education: 'university',
        contact_no:'090078601'
    }
  ]

  const passingStudentInfo = Student_Info.map(students => students)
  return (
    <div>
      <div className='conditional_div'>
        {/*if /else  START */}
      <h1>Conditional Rendering In React Js (If / else) </h1>
      {LoggedIn?<h1 className='text-info'>Welcome User</h1>:<h1 className='text-warning'>Welcome Admin</h1>}
        {/* if / else END */}



         {/* if / else if / else START */}
      <h1 className='mt-5'>Conditional Rendering In React Js (If / Else If / Else)</h1>
      {LoggedInUser == 'user' ? 
      <h1 className='text-success'>Welcome User</h1> : LoggedInUser == 'super-admin'?
      <h1 className='text-danger'>Welcome Super-Admin</h1> : 
      <h1 className='text-warning'>Welcome Admin</h1>}
          {/* if / else if / else END  */}



         {/* List Rendering START */}
         <h1 className='mt-5'>List Rendering In React Js</h1>
         <h5 className='result'>{result}</h5>
         {/* List Rendering END */}

      </div>
   
         <Student_child student_array={passingStudentInfo} />
    </div>
  )
}

export default Conditional_rendering
