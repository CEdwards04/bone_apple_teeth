import logo from './logo.svg';
import './App.css';
import './Navbar';
import Navbar from './Navbar';
import './ProfilePopup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import mealSearch from './mealSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<mealSearch></mealSearch>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    /*<div className="App">
      <Navbar></Navbar>
      <h1>CS 230 Group 8 Project</h1>
      <h2>Bone Apple Teeth</h2>
    </div>*/
  
  );
}

export default App;
