import './App.css';
import './ProfilePopup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import MealSearch from './mealSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
