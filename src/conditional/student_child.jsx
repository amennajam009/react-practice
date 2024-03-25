import React from 'react'

function Student_child(props) {
    const studentData = props.student_array
    console.log('student Array' , studentData)
  return (
    <div className='d-flex ; justify-content-center mt-5'>
      <h1>Student Child Component</h1>
      <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>University</th>
            <th>Contact_no</th>
        </thead>
      </table>
    </div>
  )
}

export default Student_child
