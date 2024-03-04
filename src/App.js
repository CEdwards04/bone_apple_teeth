import './App.css';
import './ProfilePopup';
import { BrowserRouter, Routes, Route, useHref} from "react-router-dom";
import Home from './Home';
import MealSearch from './mealSearch';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
