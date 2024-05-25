import React from "react";
import "./task.css";
import { useDispatch, useSelector } from "react-redux";
import { setNumber, generateFizzBuzz } from "../Redux/Fizzbuzz";
function Task() {
  const dispatch = useDispatch();
  const {
    number,
    result,
    fizz_result,
    buzz_result,
    fizz_buzz_result,
    actual_number,
  } = useSelector((state) => state.fizzBuzz);
  const handleChange = (e) => {
    dispatch(setNumber(e.target.value));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(generateFizzBuzz());
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="container card_body">
            <form>
              <div class="mb-3">
                <label class="form-label">Enter Number</label>
                <input
                  type="number"
                  value={number}
                  onChange={handleChange}
                  class="form-control"
                />
                <div id="emailHelp" class="form-text">
                  Testing the number if it's Fizz or Buzz.
                </div>
              </div>
              <button class="btn btn-success" onClick={handleClick}>
                Run Test
              </button>
            </form>
          </div>
          <div className="container card_body ">
            <h2>Results:</h2>
            <div>{result.join(", ")}</div>
            <h1>{fizz_result}</h1>
            <h1>{buzz_result}</h1>
            <h1>{fizz_buzz_result}</h1>
            <h1>{actual_number}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
