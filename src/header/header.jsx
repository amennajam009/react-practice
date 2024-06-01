import React from 'react'
import { Link } from 'react-router-dom';

function Header(){
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Shop">Shop</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Conditional_rendering">Conditional-rendering</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Crud">Crud</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Task">Task</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/useMemo">useMemo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Test_re_use_function">re-use-Components</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/use_Ref">use_Ref</Link>
        </li>
        <li class="nav-item"> 
            <Link class="nav-link active" aria-current="page" to="/hoc">HOC</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/context_Api">Context-API</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}


export default Header;