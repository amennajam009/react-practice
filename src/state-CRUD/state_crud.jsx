import React , {useState} from 'react'


function State_crud() {
    const[first_name , setFirstName] = useState('')
    const[last_name , setLastName] = useState('')
    const[country , setCountry] = useState('')
    const[city , setCity] = useState('')
    const[check_status , setStatus] = useState([])
    const[myArray, setMyArray] = useState([]) 
    const status = [
       'active',
        'Inactive'
    ]

    function submit (e){
     e.preventDefault();
      const payLoad = {
        first_name,
        last_name,
        country,
        city,
        check_status
      }
      setMyArray([payLoad, ...myArray])
      console.log('Array after push', [...myArray, payLoad]);
    }

  return (
<>
<div className='d-flex justify-content-center mt-5'>
<div className='w-25'>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Country</label>
    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">City</label>
    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
  {status.map((item, index) => (
    <div key={index}>
      <input type="checkbox" value={item} onChange={(e)=> setStatus(e.target.value)} className="form-check-input"  id={index} />
      <label className="form-check-label">
        {item}
      </label>
    </div>
  ))}
</div>
  <button onClick={submit} class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</>
  )
}

export default State_crud;
