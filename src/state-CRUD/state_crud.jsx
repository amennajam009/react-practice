import React, { useState } from "react";

function State_crud() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [check_status, setStatus] = useState([]);
  const [myArray, setMyArray] = useState([]);
  const [editIndex, setEditIndex] = useState()
  const [editFormData , setEditFromData] = useState({
    first_name : '',
    last_name: '',
    country:'',
    city:''
  })
  const status = ["active", "Inactive"];

  // Testing
  // const [formData , setFormData] = useState({
  //   product_1 : '',
  //   product_2 : '',
  //   product_3 : '',
  //   product_4 : ''
  //  })

  //  function submitTest(e){
  //   e.preventDefault();
  //   const payLoad = {
  //     product_1 : formData.product_1,
  //     product_2 : formData.product_2,
  //     product_3 : formData.product_3,
  //     product_4 : formData.product_4
  //   }
  //   console.log('formDataaaa', payLoad)
  //  }

  function submit(e) {
    e.preventDefault();
    const payLoad = {
      first_name,
      last_name,
      country,
      city,
      check_status,
    };
    setMyArray([payLoad, ...myArray]);
  }

  function onDelete(index) {
    const updatedArray = myArray.filter((currentItem, i) => i !== index);
    setMyArray(updatedArray);
  }

  function getItemById(index,item){
    const dataIndex = index
    setEditIndex(dataIndex)
    const itemData = item
    setEditFromData({
      first_name : itemData.first_name,
      last_name : itemData.last_name,
      country : itemData.country,
      city : itemData.city
    })
  }
  function updateItem(index) {
    const updatedItem = {
      ...myArray[index],  // maintain other properties unchanged
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      country: editFormData.country,
      city: editFormData.city
    };
  
    // Create a new array with updatedItem replacing the old item
    const updatedArray = [...myArray];
    updatedArray[index] = updatedItem;
  
    // Update state variable myArray with the updated array
    setMyArray(updatedArray);
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-25">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              {status.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-check-input"
                    id={index}
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              ))}
            </div>
            <button onClick={submit} class="btn btn-primary">
              Submit
            </button>
          </form>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
                <th scope="col" >Update</th>
              </tr>
            </thead>
            <tbody>
              {myArray.map((items, index) => (
                <>
                  <tr key={items._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{items.first_name}</td>
                    <td>{items.last_name}</td>
                    <td>{items.country}</td>
                    <td>{items.city}</td>
                    <td>{items.check_status}</td>
                    <td>
                      <button
                        className="btn bg-danger text-white"
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn bg-success text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                        onClick={()=>getItemById(index,items)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="updateModal"
                    tabIndex="-1"
                    aria-labelledby="updateModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="updateModalLabel">
                            Update Item
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder="First Name"
                              value={editFormData.first_name}
                              onChange={(e)=> setEditFromData({...editFormData,first_name:e.target.value})}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="Last Name"
                              value={editFormData.last_name}
                              onChange={(e)=> setEditFromData({...editFormData,last_name:e.target.value})}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="country" className="form-label">
                              Country
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cardHeading"
                              placeholder="Card Heading"
                              value={editFormData.country}
                              onChange={(e)=> setEditFromData({...editFormData,country:e.target.value})}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cardHeading"
                              placeholder="Card Heading"
                              value={editFormData.city}
                              onChange={(e)=> setEditFromData({...editFormData,city:e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary" onClick={() => updateItem(editIndex)}>
                            Confirm Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </tbody>
            <tbody></tbody>
          </table>

          {/* practice */}
          {/* <form style={{marginTop:'20%'}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product 1</label>
    <input type="text" value={formData.product_1} onChange={(e) => setFormData({ ...formData, product_1: e.target.value })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product 2</label>
    <input type="text" value={formData.product_2} onChange={(e) => setFormData({ ...formData, product_2: e.target.value })}  class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product 3</label>
    <input type="text" value={formData.product_3} onChange={(e) => setFormData({ ...formData, product_3: e.target.value })}  class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product 4</label>
    <input type="text" value={formData.product_4} onChange={(e) => setFormData({ ...formData, product_4: e.target.value })}  class="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={submitTest} class="btn btn-success">Submit</button>
</form> */}
        </div>
      </div>
    </>
  );
}

export default State_crud;
