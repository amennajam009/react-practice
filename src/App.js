
import './App.css';
import Header from './header/header'
import Home from './home/home'
import Shop from './shop/shop';
import Review from './review/review';
import Conditional_rendering from './conditional/conditional_rendering';
import Crud from './CRUD/crud';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
  <Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/Home" element={<Home/>}></Route>
  <Route exact path="/Shop" element={<Shop/>}></Route>
  <Route exact path="/Review" element={<Review/>}></Route>
  <Route exact path="/Conditional_rendering" element={<Conditional_rendering/>}></Route>
  <Route exact path="/Crud" element={<Crud/>}></Route>
  </Routes>
  </Router>
    </div>
  );
}

export default App;
