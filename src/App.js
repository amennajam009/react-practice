import './App.css';
import Header from './header/header'
import Home from './home/home'
import Shop from './shop/shop';
import Review from './review/review';
import Conditional_rendering from './conditional/conditional_rendering';
import Crud from './CRUD/crud';
import Task from './task/task';
import UseMemo from './useMemo/useMemo';
import Test_re_use_function from './re-use-components/test-re-use-components/test-re-use';
import UseRef from './useRef/useRef';
import Component_1 from './HOC/component-1';
import Context_Api from './context-API/context_Api';
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
  <Route exact path="/Task" element={<Task/>}></Route>
  <Route exact path="/useMemo" element={<UseMemo/>}></Route>
  <Route exact path="/Test_re_use_function" element={<Test_re_use_function/>}></Route>
  <Route exact path="/use_Ref" element={<UseRef/>}></Route>
  <Route exact path="/hoc" element={<Component_1/>}></Route>
  <Route exact path="/context_Api" element={<Context_Api/>}></Route>
  </Routes>
  </Router>
    </div>
  );
}

export default App;
